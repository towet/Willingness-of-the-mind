import { motion } from 'framer-motion';
import { 
  Palette,
  Layers,
  Wand2,
  Users,
  Star,
  Clock,
  Target,
  CheckCircle,
  Monitor,
  Brush,
  Sparkles
} from 'lucide-react';

const modules = [
  {
    title: 'Design Fundamentals',
    description: 'Master the core principles of visual design and composition',
    duration: '2 weeks',
    topics: [
      'Color Theory & Typography',
      'Layout & Composition',
      'Visual Hierarchy',
      'Design Psychology'
    ],
    icon: Palette,
    color: 'from-amber-500 to-orange-600',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Color Tools']
  },
  {
    title: 'Digital Design',
    description: 'Create stunning digital designs for web and mobile platforms',
    duration: '2 weeks',
    topics: [
      'UI/UX Design Principles',
      'Responsive Design',
      'Interactive Elements',
      'Design Systems'
    ],
    icon: Monitor,
    color: 'from-emerald-500 to-teal-600',
    tools: ['Figma', 'Sketch', 'Adobe XD', 'Principle']
  },
  {
    title: 'Brand Design',
    description: 'Develop comprehensive brand identities and visual systems',
    duration: '2 weeks',
    topics: [
      'Logo Design',
      'Brand Guidelines',
      'Marketing Materials',
      'Social Media Design'
    ],
    icon: Sparkles,
    color: 'from-violet-500 to-purple-600',
    tools: ['Illustrator', 'InDesign', 'After Effects', 'Canva Pro']
  }
];

const stats = [
  { label: 'Active Designers', value: '2,400+', icon: Users },
  { label: 'Course Rating', value: '4.8/5', icon: Star },
  { label: 'Total Duration', value: '6 Weeks', icon: Clock },
  { label: 'Portfolio Success', value: '95%', icon: Target }
];

const features = [
  {
    title: 'Industry-Standard Tools',
    description: 'Learn professional design software used by top designers',
    icon: Wand2,
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    title: 'Practical Projects',
    description: 'Build a professional portfolio with real-world projects',
    icon: Layers,
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Creative Exploration',
    description: 'Develop your unique design style and creative vision',
    icon: Brush,
    gradient: 'from-violet-500 to-purple-600'
  }
];

const showcase = [
  {
    title: 'Brand Identity',
    description: 'Create cohesive brand identities that tell compelling stories',
    image: 'https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto,fit=crop,height=630/uploads/sites/2/2023/02/Tuts_Roundup__Top_Graphic_Design_Courses.jpeg'
  },
  {
    title: 'Digital Design',
    description: 'Design stunning digital experiences for web and mobile',
    image: 'https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto,fit=crop,height=630/uploads/sites/2/2023/02/Tuts_Roundup__Top_Graphic_Design_Courses.jpeg'
  },
  {
    title: 'Print Design',
    description: 'Master the art of print design and production',
    image: 'https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto,fit=crop,height=630/uploads/sites/2/2023/02/Tuts_Roundup__Top_Graphic_Design_Courses.jpeg'
  }
];

export default function GraphicDesign() {
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
            src="https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto,fit=crop,height=630/uploads/sites/2/2023/02/Tuts_Roundup__Top_Graphic_Design_Courses.jpeg"
            alt="Graphic Design"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-purple-600 mix-blend-multiply" />
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
                <Palette className="h-12 w-12 text-white" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Unleash Your Creative Potential
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-200">
              Master the art of graphic design with our comprehensive program. From fundamentals to advanced techniques, develop the skills to create stunning visual content.
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex justify-center space-x-6"
            >
              <button className="bg-white text-amber-600 px-8 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-colors">
                Start Creating
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Explore Projects
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Grid */}
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
                <stat.icon className="h-8 w-8 text-amber-500 dark:text-amber-400" />
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

                <div className="flex flex-wrap gap-2 mb-4">
                  {module.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300"
                    >
                      {tool}
                    </span>
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

      {/* Design Showcase */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Student Showcase
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {showcase.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-200">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
        >
          Why Choose Our Program
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-xl opacity-50 group-hover:opacity-100 transition-opacity blur`} />
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl">
                <feature.icon className="h-8 w-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white mb-8"
          >
            Start Your Design Journey Today
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center space-x-6"
          >
            <button className="bg-white text-amber-600 px-8 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-colors">
              Enroll Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              View Student Work
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
