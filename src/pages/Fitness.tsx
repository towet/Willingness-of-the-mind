import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Dumbbell, 
  Home, 
  MessageSquare, 
  Settings, 
  ArrowLeft, 
  Activity,
  Zap,
  Heart,
  MoveHorizontal,
  Flame,
  Timer,
  Waves,
  Trophy,
  Clock,
  Calendar,
  Target,
  ChevronRight
} from 'lucide-react';
import FitnessChat from '../components/FitnessChat';
import { WorkoutDetail } from '../components/WorkoutDetail';
import { WorkoutPreferences } from '../types/fitness';

interface Program {
  name: string;
  icon: any;
  description: string;
  color: string;
}

interface WorkoutType {
  title: string;
  icon: any;
  description: string;
  programs: Program[];
  image: string;
}

const Fitness = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState<{ category: string; type: string } | null>(null);
  const [hoveredProgram, setHoveredProgram] = useState<string | null>(null);
  const [preferences, setPreferences] = useState<WorkoutPreferences>({
    fitnessLevel: 'beginner',
    workoutType: 'strength',
    duration: '30min',
    equipment: 'none'
  });

  const workoutTypes: WorkoutType[] = [
    {
      title: 'Gym Workouts',
      icon: Dumbbell,
      description: 'Professional gym routines for all levels',
      programs: [
        {
          name: 'Strength Training',
          icon: Dumbbell,
          description: 'Build muscle and increase strength',
          color: 'bg-gradient-to-br from-violet-500 to-indigo-600'
        },
        {
          name: 'Cardio',
          icon: Flame,
          description: 'Improve endurance and heart health',
          color: 'bg-gradient-to-br from-rose-500 to-pink-600'
        },
        {
          name: 'HIIT',
          icon: Timer,
          description: 'High-intensity interval training',
          color: 'bg-gradient-to-br from-amber-500 to-orange-600'
        },
        {
          name: 'Flexibility',
          icon: Waves,
          description: 'Enhance flexibility and mobility',
          color: 'bg-gradient-to-br from-emerald-500 to-teal-600'
        }
      ],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop'
    },
    {
      title: 'Home Workouts',
      icon: Home,
      description: 'Effective exercises without equipment',
      programs: [
        {
          name: 'Bodyweight Training',
          icon: Activity,
          description: 'Build strength using your body weight',
          color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
        },
        {
          name: 'Yoga',
          icon: Zap,
          description: 'Improve flexibility and mindfulness',
          color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600'
        },
        {
          name: 'Core Strength',
          icon: Heart,
          description: 'Develop a strong and stable core',
          color: 'bg-gradient-to-br from-red-500 to-orange-600'
        },
        {
          name: 'Mobility',
          icon: MoveHorizontal,
          description: 'Enhance range of motion and flexibility',
          color: 'bg-gradient-to-br from-lime-500 to-green-600'
        }
      ],
      image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&auto=format&fit=crop'
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
      >
        <div className="flex justify-between items-center mb-4">
          {selectedWorkout ? (
            <div className="flex items-center">
              <button
                onClick={() => setSelectedWorkout(null)}
                className="mr-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <ArrowLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </button>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Workout Plan</h1>
            </div>
          ) : (
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Your Fitness Journey
            </h1>
          )}
          <div className="flex space-x-4">
            <button
              onClick={() => setShowPreferences(!showPreferences)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              title="Workout Preferences"
            >
              <Settings className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={() => setIsChatOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              <MessageSquare className="h-5 w-5" />
              <span>AI Trainer</span>
            </button>
          </div>
        </div>
        {!selectedWorkout && (
          <p className="text-gray-600 dark:text-gray-300">
            Choose your preferred workout style and start building a stronger, healthier you.
          </p>
        )}

        {/* Preferences Panel */}
        <AnimatePresence>
          {showPreferences && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Workout Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Fitness Level
                  </label>
                  <select
                    value={preferences.fitnessLevel}
                    onChange={(e) => setPreferences({ ...preferences, fitnessLevel: e.target.value as WorkoutPreferences['fitnessLevel'] })}
                    className="w-full p-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Workout Type
                  </label>
                  <select
                    value={preferences.workoutType}
                    onChange={(e) => setPreferences({ ...preferences, workoutType: e.target.value as WorkoutPreferences['workoutType'] })}
                    className="w-full p-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600"
                  >
                    <option value="strength">Strength</option>
                    <option value="cardio">Cardio</option>
                    <option value="flexibility">Flexibility</option>
                    <option value="hiit">HIIT</option>
                    <option value="bodyweight">Bodyweight</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Duration
                  </label>
                  <select
                    value={preferences.duration}
                    onChange={(e) => setPreferences({ ...preferences, duration: e.target.value as WorkoutPreferences['duration'] })}
                    className="w-full p-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600"
                  >
                    <option value="15min">15 minutes</option>
                    <option value="30min">30 minutes</option>
                    <option value="45min">45 minutes</option>
                    <option value="60min">60 minutes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Equipment
                  </label>
                  <select
                    value={preferences.equipment}
                    onChange={(e) => setPreferences({ ...preferences, equipment: e.target.value as WorkoutPreferences['equipment'] })}
                    className="w-full p-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600"
                  >
                    <option value="none">No Equipment</option>
                    <option value="basic">Basic Equipment</option>
                    <option value="full-gym">Full Gym</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence mode="wait">
        {!selectedWorkout ? (
          <>
            <motion.div
              key="workout-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {workoutTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="flex items-center mb-2">
                        <type.icon className="h-8 w-8 text-white mr-3" />
                        <h2 className="text-2xl font-semibold text-white">{type.title}</h2>
                      </div>
                      <p className="text-gray-200">{type.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {type.programs.map((program) => (
                        <motion.div
                          key={program.name}
                          className={`relative overflow-hidden rounded-xl p-4 cursor-pointer transition-all duration-300 group ${
                            program.color
                          } hover:shadow-lg ${
                            hoveredProgram === program.name ? 'scale-105 shadow-xl ring-2 ring-white/20' : 'shadow-md'
                          }`}
                          whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.95 }}
                          onHoverStart={() => setHoveredProgram(program.name)}
                          onHoverEnd={() => setHoveredProgram(null)}
                          onClick={() => {
                            setSelectedWorkout({
                              category: type.title,
                              type: program.name
                            });
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30 group-hover:from-black/20 group-hover:to-black/40 transition-all duration-300" />
                          <div className="relative z-10">
                            <div className="flex items-center mb-3">
                              <program.icon className="h-8 w-8 text-white group-hover:text-white transition-colors drop-shadow-md" />
                              <h3 className="text-lg font-semibold text-white group-hover:text-white ml-2 transition-colors drop-shadow-md">{program.name}</h3>
                            </div>
                            <p className="text-sm text-white/90 group-hover:text-white transition-colors drop-shadow-sm">{program.description}</p>
                          </div>
                          <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-tl-[100%] transform translate-x-8 translate-y-8 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-6 group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[100%] transform -translate-x-8 -translate-y-8 group-hover:-translate-x-6 group-hover:-translate-y-6 transition-transform duration-300" />
                <Trophy className="h-8 w-8 text-white/90 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Your Achievements</h3>
                <div className="flex items-center">
                  <div className="flex-1 bg-white/20 h-2 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '80%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                  <span className="ml-3 text-white/90">12</span>
                </div>
                <p className="text-sm text-white/80 mt-2">workouts this month</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[100%] transform -translate-x-8 -translate-y-8 group-hover:-translate-x-6 group-hover:-translate-y-6 transition-transform duration-300" />
                <Clock className="h-8 w-8 text-white/90 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Next Session</h3>
                <p className="text-white font-medium">Full Body Workout</p>
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-white/70 mr-1" />
                    <span className="text-white/90">Today 5:00 PM</span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="ml-auto bg-white/20 hover:bg-white/30 transition-colors rounded-full p-2 cursor-pointer"
                  >
                    <Calendar className="h-4 w-4 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-rose-500 to-red-600 p-6 group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[100%] transform -translate-x-8 -translate-y-8 group-hover:-translate-x-6 group-hover:-translate-y-6 transition-transform duration-300" />
                <Target className="h-8 w-8 text-white/90 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Weekly Goal</h3>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className={`h-2 flex-1 rounded-full ${
                        i <= 3 ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-white/80 mt-2">3 of 5 workouts completed</p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/30 transition-colors rounded-full p-2 cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        ) : (
          <motion.div
            key="workout-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <WorkoutDetail category={selectedWorkout.category} type={selectedWorkout.type} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Modal */}
      <AnimatePresence>
        {isChatOpen && (
          <FitnessChat onClose={() => setIsChatOpen(false)} preferences={preferences} isOpen={true} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Fitness;