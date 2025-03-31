import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  Library,
  Layout,
  MessageCircle,
  Star,
  Target,
  Users,
  BookMarked,
  FileSearch,
  Award,
  BookText,
  Presentation,
  ScrollText
} from 'lucide-react';

const modules = [
  {
    title: 'Research Fundamentals',
    description: 'Master the art of academic research and source evaluation',
    duration: '2 weeks',
    topics: [
      'Understanding scholarly sources',
      'Research methodologies',
      'Critical analysis techniques',
      'Citation and referencing'
    ],
    icon: Library,
    color: 'from-blue-600 to-indigo-600',
    learningOutcomes: [
      'Evaluate and select credible academic sources',
      'Apply different research methodologies',
      'Develop critical analysis skills',
      'Master citation styles (APA, MLA, Chicago)'
    ],
    assignments: [
      'Source Evaluation Project',
      'Research Methodology Analysis',
      'Literature Review',
      'Citation Practice Exercise'
    ]
  },
  {
    title: 'Academic Writing Structure',
    description: 'Learn to structure your academic papers effectively',
    duration: '2 weeks',
    topics: [
      'Thesis development',
      'Paragraph structure',
      'Argumentative writing',
      'Academic tone and style'
    ],
    icon: Layout,
    color: 'from-purple-600 to-pink-600',
    learningOutcomes: [
      'Craft compelling thesis statements',
      'Structure paragraphs logically',
      'Develop strong arguments',
      'Maintain academic tone'
    ],
    assignments: [
      'Thesis Statement Workshop',
      'Paragraph Analysis Exercise',
      'Argumentative Essay',
      'Style Improvement Task'
    ]
  },
  {
    title: 'Advanced Writing Techniques',
    description: 'Enhance your writing with advanced academic techniques',
    duration: '2 weeks',
    topics: [
      'Critical argumentation',
      'Literature review',
      'Research paper writing',
      'Academic vocabulary'
    ],
    icon: FileText,
    color: 'from-emerald-500 to-teal-600',
    learningOutcomes: [
      'Master advanced argumentation',
      'Write comprehensive literature reviews',
      'Produce publication-ready papers',
      'Expand academic vocabulary'
    ],
    assignments: [
      'Research Paper Draft',
      'Peer Review Exercise',
      'Vocabulary Enhancement',
      'Final Paper Submission'
    ]
  }
];

const stats = [
  { label: 'Students Enrolled', value: '2,500+', icon: Users },
  { label: 'Average Rating', value: '4.9/5', icon: Star },
  { label: 'Course Duration', value: '6 Weeks', icon: Clock },
  { label: 'Completion Rate', value: '94%', icon: Target }
];

const resources = [
  {
    title: 'Digital Library Access',
    description: 'Access to over 50,000 academic journals and research papers',
    icon: BookMarked,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Citation Tools',
    description: 'Premium access to citation management software',
    icon: FileSearch,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Writing Templates',
    description: 'Professional academic paper templates and guides',
    icon: ScrollText,
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Expert Feedback',
    description: 'Personalized feedback from experienced academics',
    icon: MessageCircle,
    color: 'from-emerald-500 to-teal-500'
  }
];

const publications = [
  {
    title: 'Research Success Stories',
    description: 'Collection of successful research papers from our students',
    stats: '50+ Published Papers',
    icon: Award
  },
  {
    title: 'Writing Guides',
    description: 'Comprehensive guides for different academic writing styles',
    stats: '20+ Writing Guides',
    icon: BookText
  },
  {
    title: 'Presentation Skills',
    description: 'Tips and techniques for academic presentations',
    stats: '30+ Video Tutorials',
    icon: Presentation
  }
];

const weeklySchedule = [
  {
    week: 1,
    topic: 'Research Foundations',
    activities: [
      'Introduction to Academic Research',
      'Source Evaluation Workshop',
      'Database Search Techniques',
      'Citation Basics'
    ],
    assignment: 'Source Evaluation Project'
  },
  {
    week: 2,
    topic: 'Research Methods',
    activities: [
      'Qualitative Research Methods',
      'Quantitative Research Methods',
      'Mixed Methods Approach',
      'Research Ethics'
    ],
    assignment: 'Research Proposal'
  },
  {
    week: 3,
    topic: 'Writing Structure',
    activities: [
      'Thesis Development',
      'Outline Creation',
      'Paragraph Structure',
      'Transitions'
    ],
    assignment: 'Paper Outline'
  },
  {
    week: 4,
    topic: 'Academic Style',
    activities: [
      'Academic Tone',
      'Vocabulary Workshop',
      'Grammar Review',
      'Style Guides'
    ],
    assignment: 'Style Analysis'
  },
  {
    week: 5,
    topic: 'Advanced Techniques',
    activities: [
      'Literature Review',
      'Critical Analysis',
      'Argument Development',
      'Peer Review'
    ],
    assignment: 'Literature Review'
  },
  {
    week: 6,
    topic: 'Final Project',
    activities: [
      'Research Paper Writing',
      'Editing Workshop',
      'Presentation Skills',
      'Publication Guidelines'
    ],
    assignment: 'Final Research Paper'
  }
];

export default function AcademicWriting() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden bg-white dark:bg-gray-800"
      >
        <div className="absolute inset-0">
          <img
            src="https://startup.info/wp-content/uploads/2023/09/Sans-titre-22.jpg"
            alt="Academic Writing"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 mix-blend-multiply" />
        </div>

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white text-center mb-8"
          >
            Master Academic Writing
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto text-xl text-gray-200 text-center"
          >
            Develop professional academic writing skills with our comprehensive course designed for scholars and researchers. Learn from experienced academics and get published in top journals.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex justify-center space-x-6"
          >
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Start Learning
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              View Syllabus
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Course Modules */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
        >
          Course Modules
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className={`h-2 bg-gradient-to-r ${module.color}`} />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${module.color}`}>
                    <module.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-gray-900 dark:text-white">
                    {module.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {module.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Topics Covered:</h4>
                    <div className="space-y-3">
                      {module.topics.map((topic, i) => (
                        <div key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Learning Outcomes:</h4>
                    <div className="space-y-3">
                      {module.learningOutcomes.map((outcome, i) => (
                        <div key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                          <Target className="h-5 w-5 text-blue-500 mr-3" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Assignments:</h4>
                    <div className="space-y-3">
                      {module.assignments.map((assignment, i) => (
                        <div key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                          <FileText className="h-5 w-5 text-purple-500 mr-3" />
                          <span>{assignment}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{module.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Course Schedule
          </motion.h2>

          <div className="grid gap-8">
            {weeklySchedule.map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-lg p-2 w-12 h-12 flex items-center justify-center text-xl font-bold">
                    W{week.week}
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-gray-900 dark:text-white">
                    {week.topic}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Activities:</h4>
                    <div className="space-y-2">
                      {week.activities.map((activity, i) => (
                        <div key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Assignment:</h4>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <FileText className="h-5 w-5 text-purple-500 mr-3" />
                      <span>{week.assignment}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
        >
          Learning Resources
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${resource.color} rounded-xl opacity-50 group-hover:opacity-100 transition-opacity blur`} />
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl">
                <resource.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {resource.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Publications and Guides */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Publications & Resources
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
              >
                <pub.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {pub.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {pub.description}
                </p>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {pub.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white mb-8"
          >
            Ready to Start Your Academic Writing Journey?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center space-x-6"
          >
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Enroll Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Download Syllabus
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
