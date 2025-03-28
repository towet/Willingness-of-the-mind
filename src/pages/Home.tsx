import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Heart, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4"
        >
          <div className="text-left space-y-6">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Transform Your Mind, <span className="text-indigo-600 dark:text-indigo-400">Transform Your Life</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Join our community of individuals committed to personal growth, mental wellness, and professional development.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/dashboard"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all hover:scale-105 transform hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[300px] md:h-[500px] block w-full"
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/0*dQsuowjBuuVZrHl4"
              alt="Mindful person"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: Brain,
              title: 'Mental Wellness',
              description: 'Expert guidance and resources for managing anxiety and depression.',
              image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
              color: 'from-purple-500'
            },
            {
              icon: Heart,
              title: 'Fitness Journey',
              description: 'Personalized workout plans for both gym and home training.',
              image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
              color: 'from-red-500'
            },
            {
              icon: BookOpen,
              title: 'Skill Development',
              description: 'Learn valuable online skills to boost your income potential.',
              image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80',
              color: 'from-blue-500'
            },
            {
              icon: Users,
              title: 'Community Support',
              description: 'Connect with like-minded individuals on similar journeys.',
              image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80',
              color: 'from-green-500'
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} to-transparent opacity-60`} />
                <feature.icon className="absolute bottom-4 left-4 h-8 w-8 text-white transform group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent dark:from-gray-800 opacity-90" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 dark:bg-indigo-700 rounded-2xl p-12 text-center max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of others who have already taken the first step towards improving their lives.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-indigo-600 bg-white rounded-full hover:bg-indigo-50 transition-all hover:shadow-xl"
            >
              Begin Now
              <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;