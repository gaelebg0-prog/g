
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
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
      <button 
        onClick={onBack}
        className="flex items-center text-slate-500 hover:text-blue-600 font-bold transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
        Retour au portail
      </button>

      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200">
        <div className="bg-slate-900 p-10 text-center text-white">
          <h2 className="text-4xl font-black mb-2 tracking-tight">Classement <span className="text-blue-500">Global</span></h2>
          <p className="text-slate-400 font-medium">Mesurez vos efforts face aux meilleurs étudiants.</p>
        </div>

        <div className="p-6">
          {allEntries.map((entry, index) => {
            const isMe = entry.username === currentUser.username;
            return (
              <div 
                key={index}
                className={`flex items-center justify-between p-6 rounded-3xl mb-3 transition-all ${isMe ? 'bg-blue-50 ring-2 ring-blue-500 ring-opacity-50' : 'hover:bg-slate-50 border border-transparent hover:border-slate-200'}`}
              >
                <div className="flex items-center space-x-6">
                  <div className={`w-10 font-black text-2xl ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-slate-400' : index === 2 ? 'text-orange-500' : 'text-slate-300'}`}>
                    #{index + 1}
                  </div>
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-3xl">
                    {entry.avatar}
                  </div>
                  <div>
                    <div className={`text-lg font-black ${isMe ? 'text-blue-900' : 'text-slate-800'}`}>
                      {entry.username} {isMe && '(Toi)'}
                    </div>
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Membre Actif</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-blue-600">{entry.xp}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">XP ACQUIS</div>
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
