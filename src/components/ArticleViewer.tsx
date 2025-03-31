import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ArticleViewerProps {
  title: string;
  documentUrl: string;
  onClose: () => void;
}

export const ArticleViewer: React.FC<ArticleViewerProps> = ({ title, documentUrl, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white w-full max-w-4xl h-[90vh] rounded-xl shadow-2xl overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="h-[calc(90vh-4rem)] overflow-auto p-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {documentUrl.startsWith('data:application/pdf') ? (
                <iframe
                  src={documentUrl}
                  className="w-full h-full min-h-[70vh]"
                  title={title}
                />
              ) : (
                <div className="p-4 text-center text-gray-500">
                  No document available
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
