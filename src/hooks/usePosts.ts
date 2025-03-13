import { useState, useEffect, useCallback } from 'react';

interface Post {
  id: number;
  author: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  time: string;
  bookmarked: boolean;
  tags: string[];
  images: string[];
}

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem('community_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const addPost = useCallback((content: string) => {
    const newPost: Post = {
      id: Date.now(),
      author: "You",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content,
      likes: 0,
      comments: 0,
      shares: 0,
      time: "Just now",
      bookmarked: false,
      tags: [],
      images: []
    };

    setPosts(prevPosts => {
      const updatedPosts = [newPost, ...prevPosts];
      localStorage.setItem('community_posts', JSON.stringify(updatedPosts));
      return updatedPosts;
    });

    return newPost;
  }, []);

  return { posts, addPost };
}
