
import React from 'react';
import { UserStats } from '../types';

interface NavbarProps {
  user: UserStats;
  onHomeClick: () => void;
  onLeaderboardClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onHomeClick, onLeaderboardClick }) => {
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
          <span className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hidden sm:inline">
            EduQuest
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <button 
            onClick={onLeaderboardClick}
            className="text-gray-600 font-semibold hover:text-blue-600 transition-colors hidden md:block"
          >
            🏆 Classement
          </button>
          
          <div className="flex items-center space-x-3 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            <div className="flex flex-col items-end">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">{user.username}</span>
              <span className="text-sm font-bold text-blue-600">{user.xp} XP</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white shadow-sm">
              Lvl {user.level}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
