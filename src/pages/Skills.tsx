import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
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
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Professional Skills
          </h1>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Explore our range of professional services and expertise
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            'id' in skill ? (
              <SkillCard key={skill.id} skill={skill} onDelete={loadSkills} />
            ) : (
              <SkillCard
                key={skill.title}
                skill={{
                  id: skill.title.toLowerCase().replace(/\s+/g, '-'),
                  title: skill.title,
                  description: skill.description,
                  imageUrl: skill.image,
                  learnMoreUrl: skill.path,
                  createdAt: new Date().toISOString(),
                }}
              />
            )
          ))}
        </div>

        {/* Add Skill Button */}
        <div className="mt-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Plus className="mr-2 h-5 w-5" />
            Add New Skill
          </motion.button>
        </div>
      </div>

      {/* Add Skill Modal */}
      {isModalOpen && (
        <AddSkillForm onClose={handleCloseModal} />
      )}
    </motion.div>
  );
}