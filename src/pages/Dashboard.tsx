import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart, Calendar, Target } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Mood Score', value: '85%', icon: Brain, color: 'text-blue-600' },
    { label: 'Workout Streak', value: '7 days', icon: Target, color: 'text-green-600' },
    { label: 'Skills Progress', value: '60%', icon: BarChart, color: 'text-purple-600' },
    { label: 'Next Session', value: 'Today 3PM', icon: Calendar, color: 'text-orange-600' },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Welcome Back!</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Track your progress and continue your journey to better mental health and personal growth.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</span>
            </div>
            <h3 className="text-gray-600 dark:text-gray-300">{stat.label}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Today's Focus</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <div className="h-2 w-2 bg-green-500 rounded-full mr-3"></div>
              Complete morning meditation session
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <div className="h-2 w-2 bg-blue-500 rounded-full mr-3"></div>
              30-minute workout routine
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
              Skills learning: JavaScript basics
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Weekly Progress</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-gray-300">Fitness Goals</span>
                <span className="text-gray-900 dark:text-white">70%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-gray-300">Skills Progress</span>
                <span className="text-gray-900 dark:text-white">60%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-gray-300">Mental Wellness</span>
                <span className="text-gray-900 dark:text-white">85%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-500 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;