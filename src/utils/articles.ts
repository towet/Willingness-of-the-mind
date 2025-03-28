export interface Article {
  id: string;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
  author: string;
  avatar: string;
  readTime: string;
}

const STORAGE_KEY = "mental_wellness_articles";

// Sample articles to show by default
const defaultArticles: Article[] = [
  {
    id: "default-1",
    title: "The Science Behind Mindfulness Meditation",
    content: "Discover how mindfulness meditation can rewire your brain for better focus, reduced anxiety, and improved emotional regulation.",
    image_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    created_at: "2025-03-11T14:20:00.000Z",
    author: "Dr. Emily Wong",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    readTime: "8 min"
  },
  {
    id: "default-2",
    title: "Building Resilience Through Daily Habits",
    content: "Learn how small, consistent actions can build extraordinary mental strength.",
    image_url: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    created_at: "2025-03-10T15:30:00.000Z",
    author: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    readTime: "6 min"
  }
];

export function saveArticle(article: Omit<Article, "id" | "created_at">) {
  const articles = loadArticles();
  const newArticle: Article = {
    ...article,
    id: Math.random().toString(36).substring(2, 15),
    created_at: new Date().toISOString(),
  };
  
  articles.unshift(newArticle);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  return newArticle;
}

export function loadArticles(): Article[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    // If no articles exist in localStorage, return the default articles
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultArticles));
    return defaultArticles;
  }
  return JSON.parse(stored);
}
