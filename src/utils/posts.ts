export interface Comment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  time: string;
}

export interface Post {
  id: number;
  author: string;
  avatar: string;
  content: string;
  likes: number;
  comments: Comment[];
  shares: number;
  time: string;
  bookmarked: boolean;
  tags: string[];
  images: string[];
}

const samplePosts: Post[] = [
  {
    id: 1,
    author: 'Jane Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Just completed my morning yoga session! 🧘‍♀️ Starting the day with mindfulness and stretching makes such a difference. Who else loves morning workouts?',
    likes: 24,
    comments: [],
    shares: 2,
    time: '2 hours ago',
    bookmarked: false,
    tags: ['Wellness', 'Yoga', 'MorningRoutine'],
    images: ['https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80']
  },
  {
    id: 2,
    author: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Just completed my first week of consistent workouts! The home exercise routines have been a game-changer for my mental health. 💪 #MindLiftJourney',
    likes: 24,
    comments: [],
    shares: 2,
    time: '2 hours ago',
    bookmarked: false,
    tags: ['Fitness', 'Mental Health'],
    images: ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80']
  },
  {
    id: 3,
    author: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'The web development course is fantastic! Already building my first project and feeling more confident about my career prospects. Thank you MindLift community for the support! 🚀',
    likes: 31,
    comments: [],
    shares: 2,
    time: '4 hours ago',
    bookmarked: true,
    tags: ['Career Growth', 'Learning'],
    images: []
  },
  {
    id: 4,
    author: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    content: 'Just achieved a major milestone in my mindfulness journey! 30 days of consistent meditation practice. The mental clarity and emotional balance I\'ve gained are incredible. Here\'s to the next 30! 🧘‍♀️ #MindfulnessChallenge',
    likes: 45,
    comments: [],
    shares: 2,
    time: '6 hours ago',
    bookmarked: false,
    tags: ['Mental Health', 'Success Stories'],
    images: [
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
    ]
  }
];

export const loadPosts = (): Post[] => {
  try {
    const saved = localStorage.getItem('community_posts');
    if (!saved) {
      // If no posts exist in localStorage, save and return sample posts
      localStorage.setItem('community_posts', JSON.stringify(samplePosts));
      return samplePosts;
    }
    return JSON.parse(saved);
  } catch {
    return samplePosts;
  }
};

export const savePost = (content: string, images: string[] = []): Post => {
  const newPost: Post = {
    id: Date.now(),
    author: "You",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content,
    likes: 0,
    comments: [],
    shares: 0,
    time: "Just now",
    bookmarked: false,
    tags: [],
    images
  };

  const existingPosts = loadPosts();
  const updatedPosts = [newPost, ...existingPosts];
  localStorage.setItem('community_posts', JSON.stringify(updatedPosts));
  
  return newPost;
};

export const addComment = (postId: number, content: string): Post[] => {
  const posts = loadPosts();
  const postIndex = posts.findIndex(p => p.id === postId);
  
  if (postIndex === -1) return posts;

  const newComment: Comment = {
    id: Date.now(),
    author: "You",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content,
    time: "Just now"
  };

  posts[postIndex].comments.push(newComment);
  localStorage.setItem('community_posts', JSON.stringify(posts));
  
  return posts;
};

export const convertImageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};