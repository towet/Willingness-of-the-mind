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

export const loadPosts = (): Post[] => {
  try {
    const savedPosts = localStorage.getItem('community_posts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  } catch {
    return [];
  }
};

export const savePosts = (posts: Post[]): void => {
  localStorage.setItem('community_posts', JSON.stringify(posts));
};

export const createPost = (content: string): Post => {
  return {
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
};
