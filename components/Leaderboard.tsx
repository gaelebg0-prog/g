
import React from 'react';
import { LeaderboardEntry } from '../types';

interface LeaderboardProps {
  currentUser: { username: string; xp: number };
  onBack: () => void;
}

const MOCK_DATA: LeaderboardEntry[] = [
  { username: 'Léo Savant', xp: 2450, avatar: '👨‍🎓' },
  { username: 'Emma Curie', xp: 2120, avatar: '👩‍🔬' },
  { username: 'Lucas Newton', xp: 1980, avatar: '🧙‍♂️' },
  { username: 'Sofia Hugo', xp: 1850, avatar: '👸' },
  { username: 'Thomas Edison', xp: 1620, avatar: '👨‍🔧' },
];

const Leaderboard: React.FC<LeaderboardProps> = ({ currentUser, onBack }) => {
  const allEntries = [...MOCK_DATA, { username: currentUser.username, xp: currentUser.xp, avatar: '🌟' }]
    .sort((a, b) => b.xp - a.xp);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-500 hover:text-blue-600 font-semibold transition-colors group"
      >
        <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Retour
      </button>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white">
          <h2 className="text-3xl font-black mb-2">Classement Mondial</h2>
          <p className="text-blue-100">Les meilleurs élèves de la semaine</p>
        </div>

        <div className="p-4">
          {allEntries.map((entry, index) => {
            const isMe = entry.username === currentUser.username;
            return (
              <div 
                key={index}
                className={`flex items-center justify-between p-4 rounded-2xl mb-2 transition-all ${isMe ? 'bg-blue-50 ring-2 ring-blue-500 ring-opacity-50' : 'hover:bg-gray-50'}`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-8 font-black text-xl ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-orange-500' : 'text-gray-300'}`}>
                    #{index + 1}
                  </div>
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-2xl">
                    {entry.avatar}
                  </div>
                  <div>
                    <div className={`font-bold ${isMe ? 'text-blue-900' : 'text-gray-800'}`}>
                      {entry.username} {isMe && '(Toi)'}
                    </div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Élève Assidu</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-black text-blue-600">{entry.xp}</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase">XP total</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
