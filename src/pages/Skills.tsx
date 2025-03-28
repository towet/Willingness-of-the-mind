import { motion } from 'framer-motion';
import { Users, Star, Briefcase, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { ISkill } from '../models/Skill';
import { SkillService } from '../services/SkillService';
import { SkillCard } from '../components/SkillCard.tsx';
import { AddSkillForm } from '../components/AddSkillForm.tsx';

// Update the interface for default skills
interface DefaultSkill {
  title: string;
  description: string;
  image: string;
  stats: {
    projects: string;
    rating: string;
    clients: string;
  };
  path: string;
}

// Default skills data
const defaultSkills: DefaultSkill[] = [
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
  const [skills, setSkills] = useState<(DefaultSkill | ISkill)[]>(defaultSkills);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = async () => {
    try {
      setIsLoading(true);
      const customSkills = SkillService.getAllSkills();
      setSkills([...defaultSkills, ...customSkills]);
    } catch (error) {
      console.error('Error loading skills:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = async () => {
    setIsModalOpen(false);
    await loadSkills(); // Reload skills after closing the modal
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-100"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Professional Skills</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="mr-2" size={20} />
            Add New Skill
          </button>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={'id' in skill ? skill.id : skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {'path' in skill ? (
                  <Link to={skill.path} className="block">
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                      <img
                        src={skill.image}
                        alt={skill.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                      <p className="text-gray-600 mb-4">{skill.description}</p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <Briefcase className="mx-auto mb-1" size={20} />
                          <p className="text-sm font-medium">{skill.stats.projects}</p>
                          <p className="text-xs text-gray-500">Projects</p>
                        </div>
                        <div>
                          <Star className="mx-auto mb-1" size={20} />
                          <p className="text-sm font-medium">{skill.stats.rating}</p>
                          <p className="text-xs text-gray-500">Rating</p>
                        </div>
                        <div>
                          <Users className="mx-auto mb-1" size={20} />
                          <p className="text-sm font-medium">{skill.stats.clients}</p>
                          <p className="text-xs text-gray-500">Clients</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <SkillCard skill={skill} />
                )}
              </motion.div>
            ))}
          </div>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Add New Skill</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <AddSkillForm onClose={handleCloseModal} />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}