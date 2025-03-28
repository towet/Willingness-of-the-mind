import { supabase } from '../config/supabase';
import { RealtimeChannel } from '@supabase/supabase-js';

export interface User {
  id: string;
  name: string;
  avatar_url: string;
  is_online: boolean;
}

export interface Message {
  id: string;
  content: string;
  user_id: string;
  created_at: string;
  user?: User;
  reaction_count?: number;
}

export interface MessageReaction {
  id: string;
  message_id: string;
  user_id: string;
  reaction: string;
  created_at: string;
}

let currentUser: User | null = null;
let messageSubscription: RealtimeChannel | null = null;
let initializationPromise: Promise<void> | null = null;

export async function initializeChat() {
  if (initializationPromise) {
    return initializationPromise;
  }

  initializationPromise = (async () => {
    try {
      // Get or create user
      const { data: existingUsers } = await supabase
        .from('chat_users')
        .select('*')
        .eq('name', 'Default User')
        .limit(1);

      if (existingUsers && existingUsers.length > 0) {
        currentUser = existingUsers[0];
      } else {
        const { data: newUser, error } = await supabase
          .from('chat_users')
          .insert({
            name: 'Default User',
            avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            is_online: true
          })
          .select()
          .single();

        if (error) {
          throw error;
        }

        if (newUser) {
          currentUser = newUser;
        }
      }

      // Update user's online status
      if (currentUser) {
        await supabase
          .from('chat_users')
          .update({ is_online: true, last_seen: new Date().toISOString() })
          .eq('id', currentUser.id);
      } else {
        throw new Error('Failed to initialize user');
      }
    } catch (error) {
      console.error('Error initializing chat:', error);
      throw error;
    }
  })();

  return initializationPromise;
}

export function getCurrentUser(): User | null {
  return currentUser;
}

export function subscribeToMessages(callback: (messages: (Message & { reactions: MessageReaction[] })[]) => void) {
  if (!currentUser) {
    console.error('Cannot subscribe to messages: No current user');
    return () => {};
  }

  // Unsubscribe from any existing subscription
  if (messageSubscription) {
    messageSubscription.unsubscribe();
  }

  // Function to fetch and process messages
  const fetchMessages = async () => {
    const { data: messages, error } = await supabase
      .from('messages')
      .select(`
        *,
        user:chat_users(*),
        reactions:message_reactions(*)
      `)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching messages:', error);
      return;
    }

    if (messages) {
      callback(messages.map(msg => ({
        ...msg,
        user: msg.user,
        reactions: msg.reactions || []
      })));
    }
  };

  // Initial fetch
  fetchMessages();

  // Subscribe to changes
  messageSubscription = supabase
    .channel('messages-channel')
    .on('postgres_changes', 
      { event: '*', schema: 'public', table: 'messages' },
      fetchMessages
    )
    .on('postgres_changes',
      { event: '*', schema: 'public', table: 'message_reactions' },
      fetchMessages
    )
    .subscribe();

  // Return unsubscribe function
  return () => {
    if (messageSubscription) {
      messageSubscription.unsubscribe();
      messageSubscription = null;
    }
  };
}

export async function saveMessage(content: string): Promise<Message | null> {
  if (!currentUser) {
    console.error('Cannot save message: No current user');
    return null;
  }

  try {
    const { data: message, error } = await supabase
      .from('messages')
      .insert({
        content,
        user_id: currentUser.id
      })
      .select(`
        *,
        user:chat_users(*),
        reactions:message_reactions(*)
      `)
      .single();

    if (error) {
      console.error('Error saving message:', error);
      return null;
    }

    return message;
  } catch (error) {
    console.error('Error saving message:', error);
    return null;
  }
}

export async function addReaction(messageId: string, reaction: string): Promise<void> {
  if (!currentUser) {
    console.error('Cannot add reaction: No current user');
    return;
  }

  try {
    const { error } = await supabase
      .from('message_reactions')
      .insert({
        message_id: messageId,
        user_id: currentUser.id,
        reaction
      });

    if (error && error.code !== '23505') { // Ignore unique constraint violations
      console.error('Error adding reaction:', error);
    }
  } catch (error) {
    console.error('Error adding reaction:', error);
  }
}

export function formatMessageTime(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
  
  if (diffMinutes < 1) return 'Just now';
  if (diffMinutes < 60) return `${diffMinutes} min ago`;
  if (diffMinutes < 1440) return `${Math.floor(diffMinutes / 60)} hours ago`;
  return date.toLocaleDateString();
}

export async function cleanup() {
  if (currentUser) {
    try {
      await supabase
        .from('chat_users')
        .update({ is_online: false, last_seen: new Date().toISOString() })
        .eq('id', currentUser.id);
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  }

  if (messageSubscription) {
    messageSubscription.unsubscribe();
    messageSubscription = null;
  }

  currentUser = null;
  initializationPromise = null;
}
