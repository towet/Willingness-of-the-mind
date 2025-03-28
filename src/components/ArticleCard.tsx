import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, BookOpen } from 'lucide-react';

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    author: string;
    avatar: string;
    summary: string;
    coverImage: string;
    likes: number;
    comments: number;
    readTime: string;
    publishedAt: string;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      <img
        src={article.coverImage}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={article.avatar}
            alt={article.author}
            className="h-10 w-10 rounded-full mr-3"
          />
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {article.author}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {article.publishedAt}
            </span>
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {article.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {article.summary}
        </p>
        <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Heart className="h-5 w-5" />
              <span>{article.likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-indigo-600 dark:hover:text-indigo-400">
              <MessageCircle className="h-5 w-5" />
              <span>{article.comments}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <BookOpen className="h-4 w-4" />
            <span>{article.readTime} read</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
