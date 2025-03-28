import { motion } from 'framer-motion';
import { UserCircle, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface UserMenuProps {
  onProfileClick: () => void;
}

export default function UserMenu({ onProfileClick }: UserMenuProps) {
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      // Auth state will be handled by the auth listener in Navbar
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onProfileClick}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        title="Profile"
      >
        <UserCircle className="h-5 w-5" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLogout}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-red-600 dark:text-red-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        title="Logout"
      >
        <LogOut className="h-5 w-5" />
      </motion.button>
    </div>
  );
}
