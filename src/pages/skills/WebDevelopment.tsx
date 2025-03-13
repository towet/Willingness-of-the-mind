import { motion } from 'framer-motion';
import { 
  Code,
  Server,
  Users,
  Star,
  Clock,
  Target,
  CheckCircle,
  Shield,
  Laptop,
  Cloud,
  Boxes,
  Layers,
  Cpu
} from 'lucide-react';

const modules = [
  {
    title: 'Frontend Fundamentals',
    description: 'Master modern frontend development with HTML5, CSS3, and JavaScript',
    duration: '3 weeks',
    topics: [
      'HTML5 Semantic Elements',
      'CSS3 Flexbox & Grid',
      'JavaScript ES6+',
      'Responsive Design'
    ],
    icon: Code,
    color: 'from-blue-600 to-indigo-600',
    learningOutcomes: [
      'Build responsive web layouts',
      'Write modern JavaScript code',
      'Implement CSS animations',
      'Create accessible websites'
    ],
    assignments: [
      'Portfolio Website',
      'Interactive UI Components',
      'Responsive Landing Page',
      'JavaScript Mini-Projects'
    ]
  },
  {
    title: 'React & Modern Frameworks',
    description: 'Build dynamic web applications with React and modern tools',
    duration: '3 weeks',
    topics: [
      'React Fundamentals',
      'State Management',
      'Routing & Navigation',
      'API Integration'
    ],
    icon: Boxes,
    color: 'from-cyan-500 to-blue-500',
    learningOutcomes: [
      'Create React components',
      'Manage application state',
      'Handle user authentication',
      'Implement client-side routing'
    ],
    assignments: [
      'Task Management App',
      'E-commerce Dashboard',
      'Social Media Feed',
      'Real-time Chat Interface'
    ]
  },
  {
    title: 'Backend Development',
    description: 'Learn server-side programming and database management',
    duration: '3 weeks',
    topics: [
      'Node.js & Express',
      'RESTful APIs',
      'Database Design',
      'Authentication & Security'
    ],
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    learningOutcomes: [
      'Build REST APIs',
      'Design database schemas',
      'Implement user authentication',
      'Handle file uploads'
    ],
    assignments: [
      'API Development',
      'User Authentication System',
      'Database Integration',
      'File Upload Service'
    ]
  }
];

const stats = [
  { label: 'Students Enrolled', value: '3,200+', icon: Users },
  { label: 'Average Rating', value: '4.8/5', icon: Star },
  { label: 'Course Duration', value: '9 Weeks', icon: Clock },
  { label: 'Job Placement Rate', value: '92%', icon: Target }
];

const technologies = [
  {
    title: 'Frontend Stack',
    description: 'Modern tools for building user interfaces',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    icon: Laptop,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Backend Stack',
    description: 'Server-side technologies and databases',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    icon: Server,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'DevOps Tools',
    description: 'Development and deployment tools',
    items: ['Git', 'Docker', 'AWS', 'CI/CD'],
    icon: Cloud,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Testing & Quality',
    description: 'Tools for ensuring code quality',
    items: ['Jest', 'React Testing Library', 'Cypress', 'ESLint'],
    icon: Shield,
    color: 'from-purple-500 to-pink-500'
  }
];

const weeklySchedule = [
  {
    week: 1,
    topic: 'HTML & CSS Foundations',
    activities: [
      'HTML5 Semantic Elements',
      'CSS Box Model & Layout',
      'Flexbox Workshop',
      'CSS Grid Systems'
    ],
    assignment: 'Personal Portfolio Site'
  },
  {
    week: 2,
    topic: 'JavaScript Essentials',
    activities: [
      'ES6+ Features',
      'DOM Manipulation',
      'Event Handling',
      'Async Programming'
    ],
    assignment: 'Interactive Web App'
  },
  {
    week: 3,
    topic: 'Responsive Design',
    activities: [
      'Mobile-First Design',
      'Media Queries',
      'CSS Frameworks',
      'Performance Optimization'
    ],
    assignment: 'Responsive Dashboard'
  },
  {
    week: 4,
    topic: 'React Fundamentals',
    activities: [
      'Components & Props',
      'State Management',
      'Hooks',
      'Context API'
    ],
    assignment: 'React Todo App'
  },
  {
    week: 5,
    topic: 'Advanced React',
    activities: [
      'Custom Hooks',
      'Performance',
      'Testing',
      'State Management'
    ],
    assignment: 'E-commerce Frontend'
  },
  {
    week: 6,
    topic: 'Backend Basics',
    activities: [
      'Node.js Fundamentals',
      'Express Setup',
      'REST APIs',
      'Database Basics'
    ],
    assignment: 'Basic API Server'
  },
  {
    week: 7,
    topic: 'Database & Auth',
    activities: [
      'MongoDB/PostgreSQL',
      'Authentication',
      'Authorization',
      'Security Best Practices'
    ],
    assignment: 'User Auth System'
  },
  {
    week: 8,
    topic: 'Advanced Backend',
    activities: [
      'API Security',
      'File Uploads',
      'WebSockets',
      'Caching'
    ],
    assignment: 'Real-time Chat API'
  },
  {
    week: 9,
    topic: 'Deployment & DevOps',
    activities: [
      'Git Advanced',
      'Docker Basics',
      'CI/CD Pipeline',
      'Cloud Deployment'
    ],
    assignment: 'Full Stack Deployment'
  }
];

const careerPaths = [
  {
    title: 'Frontend Developer',
    description: 'Specialize in building user interfaces and interactive web applications',
    skills: ['React', 'TypeScript', 'CSS', 'UI/UX'],
    salary: 'Ksh85,000 - Ksh140,000',
    icon: Laptop
  },
  {
    title: 'Backend Developer',
    description: 'Focus on server-side logic and database management',
    skills: ['Node.js', 'Python', 'Databases', 'APIs'],
    salary: 'Ksh90,000 - Ksh150,000',
    icon: Server
  },
  {
    title: 'Full Stack Developer',
    description: 'Master both frontend and backend development',
    skills: ['Full Stack', 'Architecture', 'DevOps'],
    salary: 'ksh95,000 - ksh160,000',
    icon: Layers
  },
  {
    title: 'DevOps Engineer',
    description: 'Specialize in deployment, scaling, and maintenance',
    skills: ['CI/CD', 'Cloud', 'Containers'],
    salary: 'Ksh100,000 - Ksh70,000',
    icon: Cpu
  }
];

export default function WebDevelopment() {
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
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
            alt="Web Development"
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
            Master Modern Web Development
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto text-xl text-gray-200 text-center"
          >
            Learn full-stack web development with modern technologies. Build real-world projects and launch your career in tech. Industry-relevant curriculum designed by experienced developers.
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
              View Curriculum
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
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Projects:</h4>
                    <div className="space-y-3">
                      {module.assignments.map((assignment, i) => (
                        <div key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                          <Code className="h-5 w-5 text-purple-500 mr-3" />
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

      {/* Technologies */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Technology Stack
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${tech.color} rounded-xl opacity-50 group-hover:opacity-100 transition-opacity blur`} />
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl">
                  <tech.icon className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {tech.description}
                  </p>
                  <div className="space-y-2">
                    {tech.items.map((item, i) => (
                      <div key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
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
              className="bg-white dark:bg-gray-800 rounded-xl p-6"
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
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Project:</h4>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Code className="h-5 w-5 text-purple-500 mr-3" />
                    <span>{week.assignment}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Career Paths */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Career Opportunities
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {careerPaths.map((career, index) => (
              <motion.div
                key={career.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
              >
                <career.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {career.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {career.description}
                </p>
                <div className="space-y-2 mb-4">
                  {career.skills.map((skill, i) => (
                    <div key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Salary Range: {career.salary}
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
            Ready to Start Your Web Development Journey?
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
