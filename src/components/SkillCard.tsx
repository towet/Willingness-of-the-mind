import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Trash2 } from 'lucide-react';
import { ISkill } from '../models/Skill';
import { ArticleViewer } from './ArticleViewer';
import { useAdmin } from '../hooks/useAdmin';
import { SkillService } from '../services/SkillService';

interface SkillCardProps {
  skill: ISkill;
  onDelete?: () => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, onDelete }) => {
  const [showArticle, setShowArticle] = useState(false);
  const { isAdmin } = useAdmin();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      SkillService.deleteSkill(skill.id);
      onDelete?.();
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={skill.imageUrl}
            alt={skill.title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
          {skill.documentUrl && (
            <div className="absolute bottom-4 right-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowArticle(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg backdrop-blur-sm bg-opacity-90"
              >
                <FileText size={18} />
                <span>Read Document</span>
              </motion.button>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900">
              {skill.title}
            </h3>
            {isAdmin && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDelete}
                className="text-red-600 hover:text-red-800 transition-colors"
                title="Delete skill"
              >
                <Trash2 size={20} />
              </motion.button>
            )}
          </div>
          <p className="text-gray-600 mb-4">
            {skill.description}
          </p>
          <div className="flex items-center justify-between">
            <a
              href={skill.learnMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Learn More →
            </a>
            <span className="text-sm text-gray-500">
              {new Date(skill.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </motion.div>

      {showArticle && (
        <ArticleViewer
          title={skill.title}
          documentUrl={skill.documentUrl || ''}
          onClose={() => setShowArticle(false)}
        />
      )}
    </>
  );
};
