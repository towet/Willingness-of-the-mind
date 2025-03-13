import { motion } from 'framer-motion';
import { 
  PenTool,
  Edit,
  MessageSquare,
  Target,
  Users,
  Star,
  Clock,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const modules = [
  {
    title: 'Content Strategy',
    description: 'Learn to develop effective content strategies that engage and convert',
    duration: '2 weeks',
    topics: [
      'Audience Analysis',
      'Content Planning',
      'SEO Fundamentals',
      'Content Calendar Creation'
    ],
    icon: Target,
    color: 'from-rose-500 to-pink-600',
    metrics: ['Engagement Rate', 'Conversion Rate', 'Audience Growth', 'Content ROI']
  },
  {
    title: 'Creative Writing',
    description: 'Master the art of crafting compelling narratives and stories',
    duration: '2 weeks',
    topics: [
      'Storytelling Techniques',
      'Brand Voice Development',
      'Emotional Connection',
      'Creative Frameworks'
    ],
    icon: PenTool,
    color: 'from-violet-500 to-purple-600',
    metrics: ['Reader Retention', 'Social Shares', 'Comments', 'Time on Page']
  },
  {
    title: 'Digital Marketing',
    description: 'Integrate content with digital marketing strategies for maximum impact',
    duration: '2 weeks',
    topics: [
      'Social Media Content',
      'Email Marketing',
      'Content Distribution',
      'Analytics & Optimization'
    ],
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-600',
    metrics: ['Click-through Rate', 'Social Reach', 'Email Opens', 'Lead Generation']
  }
];

const stats = [
  { label: 'Content Writers Trained', value: '1,800+', icon: Users },
  { label: 'Student Satisfaction', value: '4.9/5', icon: Star },
  { label: 'Program Duration', value: '6 Weeks', icon: Clock },
  { label: 'Career Placement', value: '89%', icon: Target }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Content Strategist',
    content: 'This course transformed my writing career. The practical insights and hands-on projects helped me develop a strong portfolio.',
    metrics: 'Increased content engagement by 156%'
  },
  {
    name: 'Michael Chen',
    role: 'Digital Marketer',
    content: 'The content strategy module was exactly what I needed. Now I can create content that truly resonates with our audience.',
    metrics: 'Achieved 3x higher conversion rates'
  },
  {
    name: 'Emma Davis',
    role: 'Freelance Writer',
    content: 'The creative writing techniques I learned helped me land major clients. This course is worth every penny.',
    metrics: 'Doubled freelance income in 3 months'
  }
];

export default function ContentWriting() {
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
            src="https://webtagsltd.com.ng/images/services/content-writing.jpg"
            alt="Content Writing"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-600 mix-blend-multiply" />
        </div>

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl">
                <Edit className="h-12 w-12 text-white" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Master Content Writing
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-200">
              Learn to create compelling content that engages audiences and drives results. From strategy to execution, master every aspect of content creation.
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex justify-center space-x-6"
            >
              <button className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors">
                Begin Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                View Course Details
              </button>
            </motion.div>
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
                <stat.icon className="h-8 w-8 text-rose-500 dark:text-rose-400" />
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
          Program Modules
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300"
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

                <div className="space-y-3 mb-6">
                  {module.topics.map((topic, i) => (
                    <div key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {module.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 text-center"
                    >
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{module.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Success Stories
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-purple-600 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity blur" />
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl">
                  <MessageSquare className="h-8 w-8 text-rose-500 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-rose-500 dark:text-rose-400 mt-2">
                      {testimonial.metrics}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-rose-500 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white mb-8"
          >
            Transform Your Content Writing Career
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center space-x-6"
          >
            <button className="bg-white text-rose-600 px-8 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-colors">
              Start Learning
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Explore Curriculum
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
