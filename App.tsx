
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import SubjectSelector from './components/SubjectSelector.tsx';
import GameEngine from './components/GameEngine.tsx';
import { Subject, Level, UserStats } from './types.ts';

const App: React.FC = () => {
  const [user, setUser] = useState<UserStats>(() => {
    const saved = localStorage.getItem('eduquest_user_v2');
    return saved ? JSON.parse(saved) : {
      username: 'Apprenti',
      completedExercises: 0
    };
  });

  const [view, setView] = useState<'start' | 'home' | 'game'>('start');
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  useEffect(() => {
    localStorage.setItem('eduquest_user_v2', JSON.stringify(user));
  }, [user]);

  const handleLevelSelect = (level: Level) => {
    setSelectedLevel(level);
    setView('home');
  };

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject);
    setView('game');
  };

  const resetToStart = () => {
    setSelectedLevel(null);
    setSelectedSubject(null);
    setView('start');
  };

  const goHome = () => {
    setSelectedSubject(null);
    setView('home');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar 
        user={user} 
        onHomeClick={resetToStart} 
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        {view === 'start' && (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-black text-gray-900">Bienvenue sur <span className="text-blue-600">EduQuest</span></h1>
              <p className="text-xl text-gray-500">Sélectionne ton cycle scolaire pour accéder aux cours et exercices.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { id: 'Primaire', icon: '🎒', desc: 'Apprendre les bases essentielles' },
                { id: 'Collège', icon: '🏫', desc: 'Approfondir tes connaissances' },
                { id: 'Lycée', icon: '🎓', desc: 'Préparer tes examens et ton avenir' }
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => handleLevelSelect(lvl.id as Level)}
                  className="bg-white p-10 rounded-[2.5rem] border-2 border-transparent hover:border-blue-500 hover:shadow-2xl transition-all group text-center"
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{lvl.icon}</div>
                  <h3 className="text-2xl font-black text-gray-800 mb-2">{lvl.id}</h3>
                  <p className="text-gray-500 text-sm">{lvl.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {view === 'home' && selectedLevel && (
          <div className="space-y-8">
            <button onClick={resetToStart} className="flex items-center text-gray-500 font-bold hover:text-blue-600">
              ← Changer de niveau ({selectedLevel})
            </button>
            <SubjectSelector onSelect={handleSubjectSelect} level={selectedLevel} />
          </div>
        )}

        {view === 'game' && selectedSubject && selectedLevel && (
          <GameEngine 
            subject={selectedSubject} 
            level={selectedLevel} 
            user={user}
            onUpdateStats={() => setUser(prev => ({ ...prev, completedExercises: prev.completedExercises + 1 }))}
            onFinish={goHome}
            onBack={goHome}
          />
        )}
      </main>
    </div>
  );
};

export default App;
