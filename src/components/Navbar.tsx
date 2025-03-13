import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Dumbbell, GraduationCap, Users, Briefcase, Menu, Sun, Moon, Laptop, X, UserCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { supabase } from '../lib/supabase';
import ProfileModal from './Profile/ProfileModal';
import LogoutButton from './LogoutButton';

type Theme = 'light' | 'dark' | 'system';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [user, setUser] = React.useState<any>(null);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const navItems = [
    { path: '/dashboard', name: 'Dashboard', icon: Brain },
    { path: '/fitness', name: 'Fitness', icon: Dumbbell },
    { path: '/skills', name: 'Skills', icon: GraduationCap },
    { path: '/community', name: 'Community', icon: Users },
    { path: '/jobs', name: 'Jobs', icon: Briefcase },
  ];

  const themes: { name: Theme; icon: typeof Sun }[] = [
    { name: 'light', icon: Sun },
    { name: 'dark', icon: Moon },
    { name: 'system', icon: Laptop },
  ];

  const currentThemeIcon = themes.find(t => t.name === theme)?.icon || Sun;

  const handleThemeChange = () => {
    const currentIndex = themes.findIndex(t => t.name === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].name);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? 'bg-white dark:bg-gray-800 shadow-lg'
            : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Brain className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-indigo-600 transition-all duration-300">
                MindLift Membership System
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30'
                          : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30'
                      }`}
                    >
                      <Icon className={`h-4 w-4 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}

              {/* Theme and Profile Icons */}
              <div className="flex items-center space-x-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleThemeChange}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  {React.createElement(currentThemeIcon, { className: "h-5 w-5" })}
                </motion.button>

                {user && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsProfileOpen(true)}
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <UserCircle className="h-5 w-5" />
                    </motion.button>
                    <LogoutButton />
                  </>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleThemeChange}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {React.createElement(currentThemeIcon, { className: "h-5 w-5" })}
              </motion.button>

              {user && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsProfileOpen(true)}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <UserCircle className="h-5 w-5" />
                  </motion.button>
                  <LogoutButton />
                </>
              )}

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden bg-white dark:bg-gray-800 rounded-b-2xl shadow-lg"
              >
                <div className="py-3 space-y-1">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          className={`flex items-center space-x-2 px-4 py-3 mx-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                            isActive
                              ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30'
                              : 'text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <Icon className={`h-5 w-5 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
                          <span>{item.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Profile Modal */}
      {user && (
        <ProfileModal
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
          userId={user.id}
        />
      )}
    </>
  );
};

export default Navbar;