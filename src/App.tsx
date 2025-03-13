import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Fitness from './pages/Fitness';
import Skills from './pages/Skills';
import AcademicWriting from './pages/skills/AcademicWriting';
import WebDevelopment from './pages/skills/WebDevelopment';
import ContentWriting from './pages/skills/ContentWriting';
import GraphicDesign from './pages/skills/GraphicDesign';
import Community from './pages/Community';
import Jobs from './pages/Jobs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './components/theme-provider';
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';
import AuthForm from './components/Auth/AuthForm';
import type { User } from '@supabase/supabase-js';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for changes on auth state (sign in, sign out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
      }}>
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div className="app">
      {!user ? (
        <AuthForm />
      ) : (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
              <Navbar />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 py-8"
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/fitness" element={<Fitness />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/skills/academic-writing" element={<AcademicWriting />} />
                  <Route path="/skills/web-development" element={<WebDevelopment />} />
                  <Route path="/skills/content-writing" element={<ContentWriting />} />
                  <Route path="/skills/graphic-design" element={<GraphicDesign />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/jobs" element={<Jobs />} />
                </Routes>
              </motion.div>
              <Footer />
            </div>
          </Router>
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;