
import React from 'react';
import { UserStats } from '../types';

interface NavbarProps {
  user: UserStats;
  onHomeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onHomeClick }) => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 px-6 py-4 sm:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={onHomeClick}
        >
          <div className="bg-slate-900 text-white w-9 h-9 rounded-lg flex items-center justify-center font-black text-lg tracking-tighter">
            EQ
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            EduQuest <span className="text-blue-600 font-normal">Academy</span>
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex items-center space-x-2 text-slate-500 text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>Accès Étudiant</span>
          </div>
          <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 flex items-center space-x-3">
            <span className="text-sm font-bold text-slate-700">{user.username}</span>
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-black">
              ST
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
