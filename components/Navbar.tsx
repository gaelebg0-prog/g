
import React from 'react';
import { UserStats } from '../types';

interface NavbarProps {
  user: UserStats;
  onHomeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onHomeClick }) => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 px-4 py-3 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={onHomeClick}
        >
          <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
            E
          </div>
          <span className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            EduQuest
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 flex items-center space-x-2">
            <span className="text-sm font-bold text-gray-600">{user.username}</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
