import { motion } from 'framer-motion';
import { Users, Star, Briefcase, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Default skills data
const defaultSkills = [
  {
    title: 'Academic Writing',
    description: 'Expert in crafting well-researched academic papers and theses',
    image: 'https://startup.info/wp-content/uploads/2023/09/Sans-titre-22.jpg',
    stats: {
      projects: '120+',
      rating: '4.9',
      clients: '85+'
    },
    path: '/skills/academic-writing'
  },
  {
    title: 'Web Development',
    description: 'Full-stack developer specializing in modern web technologies',
    image: 'https://aoasoftwaresolution.com/wp-content/uploads/2023/06/wde.jpg',
    stats: {
      projects: '150+',
      rating: '4.8',
      clients: '95+'
    },
    path: '/skills/web-development'
  },
  {
    title: 'Content Writing',
    description: 'Creating engaging content that connects with audiences',
    image: 'https://webtagsltd.com.ng/images/services/content-writing.jpg',
    stats: {
      projects: '200+',
      rating: '4.9',
      clients: '110+'
    },
    path: '/skills/content-writing'
  },
  {
    title: 'Graphic Design',
    description: 'Designing stunning visuals that tell compelling stories',
    image: 'https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto,fit=crop,height=630/uploads/sites/2/2023/02/Tuts_Roundup__Top_Graphic_Design_Courses.jpeg',
    stats: {
      projects: '180+',
      rating: '4.8',
      clients: '90+'
    },
    path: '/skills/graphic-design'
  }
];

export default function Skills() {
  const [skills, setSkills] = useState(defaultSkills);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newSkill, setNewSkill] = useState({
    title: '',
    description: '',
    image: '',
    stats: {
      projects: '0+',
      rating: '0.0',
      clients: '0+'
    },
    path: ''
  });

  useEffect(() => {
    const savedSkills = localStorage.getItem('customSkills');
    if (savedSkills) {
      setSkills([...defaultSkills, ...JSON.parse(savedSkills)]);
    }
  }, []);

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    const customSkills = JSON.parse(localStorage.getItem('customSkills') || '[]');
    const updatedSkill = {
      ...newSkill,
      path: `/skills/${newSkill.title.toLowerCase().replace(/\s+/g, '-')}`
    };
    
    localStorage.setItem('customSkills', JSON.stringify([...customSkills, updatedSkill]));
    setSkills([...skills, updatedSkill]);
    setIsModalOpen(false);
    setNewSkill({
      title: '',
      description: '',
      image: '',
      stats: {
        projects: '0+',
        rating: '0.0',
        clients: '0+'
      },
      path: ''
    });
  };

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setIsLoginModalOpen(false);
      setIsModalOpen(true);
      setUsername('');
      setPassword('');
    } else {
      alert('Invalid credentials! Username and password should both be "admin"');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Professional Skills
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Expertise in various domains with proven track record
          </p>
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add New Skill
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {skill.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Briefcase className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {skill.stats.projects}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Projects
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {skill.stats.rating}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Rating
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {skill.stats.clients}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Clients
                    </div>
                  </div>
                </div>

                <Link
                  to={skill.path}
                  className="block w-full text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Login Modal */}
        {isLoginModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative"
            >
              <button
                onClick={() => setIsLoginModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Admin Login
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter username"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter password"
                  />
                </div>
                <button
                  onClick={handleLogin}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Login
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Add Skill Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Add New Skill
              </h3>
              <form onSubmit={handleAddSkill}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Title
                    </label>
                    <input
                      type="text"
                      required
                      value={newSkill.title}
                      onChange={(e) => setNewSkill({ ...newSkill, title: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Description
                    </label>
                    <textarea
                      required
                      value={newSkill.description}
                      onChange={(e) => setNewSkill({ ...newSkill, description: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Image URL
                    </label>
                    <input
                      type="url"
                      required
                      value={newSkill.image}
                      onChange={(e) => setNewSkill({ ...newSkill, image: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Learn More URL
                    </label>
                    <input
                      type="url"
                      required
                      value={newSkill.path}
                      onChange={(e) => setNewSkill({ ...newSkill, path: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Add Skill
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}