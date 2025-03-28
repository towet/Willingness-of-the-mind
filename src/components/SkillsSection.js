import React, { useState, useEffect } from 'react';
import { SkillService } from '../services/SkillService';
import { AddSkillForm } from './AddSkillForm';
import { SkillCard } from './SkillCard';

export const SkillsSection = () => {
  const [skills, setSkills] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    // Load skills when component mounts
    loadSkills();
  }, []);

  const loadSkills = () => {
    const loadedSkills = SkillService.getAllSkills();
    setSkills(loadedSkills);
  };

  const handleAddSkill = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
    loadSkills(); // Reload skills after adding
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Professional Skills</h2>
          <button
            onClick={handleAddSkill}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add New Skill
          </button>
        </div>

        {showAddForm && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Add New Skill
                </h3>
                <AddSkillForm onClose={handleCloseForm} />
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
