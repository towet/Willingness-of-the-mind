import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleLogout}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-red-600 dark:text-red-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      title="Logout"
    >
      <LogOut className="h-5 w-5" />
    </motion.button>
  );
}
