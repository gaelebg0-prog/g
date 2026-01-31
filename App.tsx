
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import SubjectSelector from './components/SubjectSelector.tsx';
import GameEngine from './components/GameEngine.tsx';
import { Subject, Level, UserStats } from './types.ts';

const App: React.FC = () => {
  const [user, setUser] = useState<UserStats>(() => {
    const saved = localStorage.getItem('eduquest_user_v2');
    return saved ? JSON.parse(saved) : {
      username: 'Étudiant',
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
    <div className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-900">
      <Navbar 
        user={user} 
        onHomeClick={resetToStart} 
      />
      
      <main className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        {view === 'start' && (
          <div className="space-y-16 animate-in fade-in duration-700">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-bold rounded-full tracking-wide uppercase">
                Plateforme de Réussite Académique
              </span>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight">
                L'excellence éducative à portée de main.
              </h1>
              <p className="text-xl text-slate-500 font-medium">
                Accédez à des cours structurés et des modules d'évaluation interactive pour maîtriser les programmes officiels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { id: 'Collège', icon: '🏛️', desc: 'Cycles 3 et 4 : Consolidation des fondamentaux et préparation au Brevet.' },
                { id: 'Lycée', icon: '🎓', desc: 'Seconde, Première & Terminale : Spécialisation et préparation intensive au Baccalauréat.' }
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => handleLevelSelect(lvl.id as Level)}
                  className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-600 hover:-translate-y-1 transition-all group text-left"
                >
                  <div className="text-5xl mb-6 bg-slate-50 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:bg-blue-50 transition-colors">
                    {lvl.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">{lvl.id}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{lvl.desc}</p>
                  <div className="mt-8 flex items-center text-blue-600 font-bold uppercase tracking-wider text-sm">
                    Accéder au portail 
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {view === 'home' && selectedLevel && (
          <div className="space-y-10 animate-in slide-in-from-bottom-4">
            <button onClick={resetToStart} className="flex items-center text-slate-400 font-bold hover:text-blue-600 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Changer de cycle scolaire
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
