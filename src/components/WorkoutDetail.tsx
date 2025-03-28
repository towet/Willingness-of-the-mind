import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Exercise, generateWorkoutSection } from '../lib/workoutGenerator';
import { Loader2, RefreshCw, Clock, Dumbbell, AlertCircle, ChevronRight } from 'lucide-react';

interface WorkoutDetailProps {
  category: string;
  type: string;
}

export const WorkoutDetail = ({ category, type }: WorkoutDetailProps) => {
  const [currentSection, setCurrentSection] = useState<'Warm-up' | 'Main Workout' | 'Cool-down'>('Warm-up');
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    loadExercises();
  }, [currentSection, category, type]);

  const loadExercises = async () => {
    setLoading(true);
    setError(false);
    try {
      const newExercises = await generateWorkoutSection(category, type, currentSection);
      if (newExercises.length === 0) {
        setError(true);
      }
      setExercises(newExercises);
    } catch (error) {
      console.error('Error loading exercises:', error);
      setError(true);
    }
    setLoading(false);
  };

  const sections: ('Warm-up' | 'Main Workout' | 'Cool-down')[] = ['Warm-up', 'Main Workout', 'Cool-down'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getSectionColor = (section: string) => {
    switch (section) {
      case 'Warm-up':
        return 'from-orange-400 to-red-400 dark:from-orange-500 dark:to-red-500';
      case 'Main Workout':
        return 'from-blue-400 to-indigo-400 dark:from-blue-500 dark:to-indigo-500';
      case 'Cool-down':
        return 'from-teal-400 to-green-400 dark:from-teal-500 dark:to-green-500';
      default:
        return 'from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-600';
    }
  };

  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'Warm-up':
        return <Clock className="h-5 w-5" />;
      case 'Main Workout':
        return <Dumbbell className="h-5 w-5" />;
      case 'Cool-down':
        return <AlertCircle className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          {category} - {type}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Follow along with your personalized workout routine
        </p>
      </motion.div>

      <div className="flex justify-center mb-12 space-x-4">
        {sections.map((section) => (
          <motion.button
            key={section}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all shadow-lg ${
              currentSection === section
                ? `bg-gradient-to-r ${getSectionColor(section)} text-white`
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/80'
            }`}
            onClick={() => setCurrentSection(section)}
          >
            {getSectionIcon(section)}
            <span>{section}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-16"
          >
            <div className="relative">
              <Loader2 className="h-12 w-12 animate-spin text-blue-500 dark:text-blue-400" />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-transparent to-transparent" />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
              Generating your {currentSection.toLowerCase()}...
            </p>
          </motion.div>
        ) : error ? (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-16"
          >
            <div className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Unable to generate exercises. Please try again.
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadExercises}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <RefreshCw className="h-5 w-5" />
              <span>Retry</span>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key={currentSection}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="space-y-6"
          >
            {exercises.map((exercise, index) => (
              <motion.div
                key={exercise.name + index}
                variants={cardVariants}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                  expandedCard === index ? 'ring-2 ring-blue-400 dark:ring-blue-500' : ''
                }`}
              >
                <div
                  className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                        {exercise.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                          {exercise.sets} sets
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                          {exercise.reps}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedCard === index ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedCard === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-4"
                      >
                        <p className="text-gray-600 dark:text-gray-300">
                          {exercise.description}
                        </p>

                        {exercise.modifications && exercise.modifications.length > 0 && (
                          <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                              Modifications
                            </h4>
                            <ul className="space-y-2">
                              {exercise.modifications.map((mod, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start text-gray-600 dark:text-gray-300"
                                >
                                  <span className="mr-2 text-gray-400 dark:text-gray-500">•</span>
                                  {mod}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {exercise.tips && exercise.tips.length > 0 && (
                          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800/30">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                              Pro Tips
                            </h4>
                            <ul className="space-y-2">
                              {exercise.tips.map((tip, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start text-blue-700 dark:text-blue-300"
                                >
                                  <span className="mr-2">💡</span>
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
