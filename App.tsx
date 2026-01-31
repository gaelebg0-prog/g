
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import SubjectSelector from './components/SubjectSelector.tsx';
import LevelSelector from './components/LevelSelector.tsx';
import GameEngine from './components/GameEngine.tsx';
import Leaderboard from './components/Leaderboard.tsx';
import { Subject, Level, UserStats } from './types.ts';

const App: React.FC = () => {
  const [user, setUser] = useState<UserStats>(() => {
    const saved = localStorage.getItem('eduquest_user');
    return saved ? JSON.parse(saved) : {
      username: 'Apprenti',
      xp: 0,
      completedExercises: 0,
      rank: 999,
      level: 1
    };
  });

  const [view, setView] = useState<'home' | 'level-select' | 'game' | 'leaderboard'>('home');
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);

  useEffect(() => {
    localStorage.setItem('eduquest_user', JSON.stringify(user));
  }, [user]);

  const updateStats = (points: number) => {
    setUser(prev => {
      const newXp = prev.xp + points;
      const newLevel = Math.floor(newXp / 100) + 1;
      return {
        ...prev,
        xp: newXp,
        completedExercises: prev.completedExercises + 1,
        level: newLevel
      };
    });
  };

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject);
    setView('level-select');
  };

  const handleLevelSelect = (level: Level) => {
    setSelectedLevel(level);
    setView('game');
  };

  const goHome = () => {
    setSelectedSubject(null);
    setSelectedLevel(null);
    setView('home');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar 
        user={user} 
        onHomeClick={goHome} 
        onLeaderboardClick={() => setView('leaderboard')} 
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        {view === 'home' && (
          <SubjectSelector onSelect={handleSubjectSelect} />
        )}

        {view === 'level-select' && selectedSubject && (
          <LevelSelector 
            subject={selectedSubject} 
            onSelect={handleLevelSelect}
            onBack={goHome}
          />
        )}

        {view === 'game' && selectedSubject && selectedLevel && (
          <GameEngine 
            subject={selectedSubject} 
            level={selectedLevel} 
            user={user}
            onUpdateStats={updateStats}
            onFinish={goHome}
          />
        )}

        {view === 'leaderboard' && (
          <Leaderboard 
            currentUser={user} 
            onBack={goHome} 
          />
        )}
      </main>

      {/* Persistent Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 sm:hidden z-50 flex justify-around">
        <button onClick={goHome} className="flex flex-col items-center text-blue-600">
          <span className="text-xl">🏠</span>
          <span className="text-[10px] font-bold uppercase">Accueil</span>
        </button>
        <button onClick={() => setView('leaderboard')} className="flex flex-col items-center text-gray-400">
          <span className="text-xl">🏆</span>
          <span className="text-[10px] font-bold uppercase">Classement</span>
        </button>
      </div>
    </div>
  );
};

export default App;
