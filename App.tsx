
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import GameEngine from './components/GameEngine.tsx';
import Leaderboard from './components/Leaderboard.tsx';
import { Grade, UserStats, Theme, Lesson, Level, Subject } from './types.ts';
import { ACADEMIC_DATA } from './data/subjects.ts';

type ViewState = 'level' | 'grade' | 'subject' | 'theme' | 'lesson' | 'leaderboard';

const App: React.FC = () => {
  const [user, setUser] = useState<UserStats>(() => {
    const saved = localStorage.getItem('eduquest_pro_v2');
    return saved ? JSON.parse(saved) : { username: 'Étudiant', completedExercises: 0 };
  });

  const [view, setView] = useState<ViewState>('level');
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    localStorage.setItem('eduquest_pro_v2', JSON.stringify(user));
  }, [user]);

  const gradesByLevel = {
    'Collège': ['6ème', '5ème', '4ème', '3ème'] as Grade[],
    'Lycée': ['Seconde', 'Première', 'Terminale'] as Grade[]
  };

  const currentGradeData = ACADEMIC_DATA.find(d => d.grade === selectedGrade);

  const resetTo = (targetView: ViewState) => {
    if (targetView === 'level') {
      setSelectedLevel(null); setSelectedGrade(null); setSelectedSubject(null); setSelectedTheme(null); setSelectedLesson(null);
    } else if (targetView === 'grade') {
      setSelectedGrade(null); setSelectedSubject(null); setSelectedTheme(null); setSelectedLesson(null);
    } else if (targetView === 'subject') {
      setSelectedSubject(null); setSelectedTheme(null); setSelectedLesson(null);
    } else if (targetView === 'theme') {
      setSelectedTheme(null); setSelectedLesson(null);
    }
    setView(targetView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar user={user} onHomeClick={() => resetTo('level')} />
      
      <button 
        onClick={() => setView('leaderboard')}
        className="fixed bottom-6 right-6 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl hover:bg-blue-600 transition-all z-40 flex items-center space-x-2 group"
      >
        <span className="text-xl">🏆</span>
        <span className="font-bold text-sm hidden group-hover:block pr-2">Classement</span>
      </button>

      <main className="max-w-6xl mx-auto px-6 py-10">
        
        {view !== 'level' && view !== 'leaderboard' && (
          <nav className="flex items-center space-x-2 text-sm font-bold text-slate-400 mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
            <button onClick={() => resetTo('level')} className="hover:text-blue-600 transition-colors uppercase tracking-widest">Accueil</button>
            {selectedLevel && (
              <><span className="text-slate-300">/</span><button onClick={() => resetTo('grade')} className="hover:text-blue-600 transition-colors uppercase tracking-widest">{selectedLevel}</button></>
            )}
            {selectedGrade && (
              <><span className="text-slate-300">/</span><button onClick={() => resetTo('subject')} className="hover:text-blue-600 transition-colors uppercase tracking-widest">{selectedGrade}</button></>
            )}
            {selectedSubject && (
              <><span className="text-slate-300">/</span><button onClick={() => resetTo('theme')} className="hover:text-blue-600 transition-colors uppercase tracking-widest">{selectedSubject.name}</button></>
            )}
          </nav>
        )}

        {view === 'leaderboard' && (
          <Leaderboard 
            currentUser={{ username: user.username, xp: user.completedExercises * 10 }} 
            onBack={() => setView('level')} 
          />
        )}

        {view === 'level' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="text-center space-y-4">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-black rounded-full tracking-widest uppercase mb-2">
                Certification de Réussite
              </span>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">Portail <span className="text-blue-600">Académique</span></h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">L'excellence au bout des doigts. Accédez à vos programmes spécialisés.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {(['Collège', 'Lycée'] as Level[]).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => { setSelectedLevel(lvl); setView('grade'); }}
                  className="bg-white p-12 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-500 transition-all text-left group overflow-hidden relative"
                >
                  <div className="text-4xl mb-6 bg-slate-50 w-20 h-20 rounded-3xl flex items-center justify-center group-hover:bg-blue-50 transition-colors relative z-10">
                    {lvl === 'Collège' ? '🏛️' : '🎓'}
                  </div>
                  <h3 className="text-4xl font-black mb-3 relative z-10">{lvl}</h3>
                  <p className="text-slate-500 font-medium relative z-10">Programmes officiels et préparation aux examens du cycle {lvl.toLowerCase()}.</p>
                  <div className="absolute -bottom-10 -right-10 text-9xl opacity-[0.03] group-hover:scale-110 transition-transform">{lvl === 'Collège' ? '🏫' : '🏛️'}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {view === 'grade' && selectedLevel && (
          <div className="space-y-10 animate-in slide-in-from-bottom-6 duration-500">
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-slate-900">Niveaux d'études</h2>
              <p className="text-slate-500 font-medium">Sélectionnez votre classe actuelle pour filtrer les matières.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {gradesByLevel[selectedLevel].map((g) => (
                <button
                  key={g}
                  onClick={() => { setSelectedGrade(g); setView('subject'); }}
                  className="bg-white p-10 rounded-3xl border border-slate-200 hover:border-blue-600 font-black text-3xl text-center transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        )}

        {view === 'subject' && selectedGrade && (
          <div className="space-y-10 animate-in slide-in-from-bottom-6 duration-500">
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-slate-900">Unités d'Enseignement</h2>
              <p className="text-slate-500 font-medium">Parcours académique complet pour la classe de <span className="text-slate-900 font-bold">{selectedGrade}</span>.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentGradeData ? currentGradeData.subjects.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => { setSelectedSubject(sub); setView('theme'); }}
                  className="group bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-blue-600 transition-all text-left flex flex-col space-y-4 shadow-sm hover:shadow-xl"
                >
                  <div className="text-4xl bg-slate-50 p-5 rounded-2xl group-hover:bg-blue-50 transition-colors w-fit">{sub.icon}</div>
                  <div>
                    <h3 className="text-xl font-black mb-1">{sub.name}</h3>
                    <p className="text-slate-500 text-sm font-medium">{sub.themes.length} modules thématiques</p>
                  </div>
                  <div className="pt-2 flex items-center text-blue-600 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Explorer
                    <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </button>
              )) : (
                <div className="col-span-full p-20 bg-slate-100 rounded-[3rem] text-center border-2 border-dashed border-slate-300">
                  <div className="text-5xl mb-6">⚙️</div>
                  <h3 className="text-2xl font-bold text-slate-800">Module en cours d'édition</h3>
                  <p className="text-slate-500 mt-2 font-medium">Les ressources pour la classe de {selectedGrade} sont en cours de validation pédagogique.</p>
                  <button onClick={() => resetTo('grade')} className="mt-8 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold">Retour aux classes</button>
                </div>
              )}
            </div>
          </div>
        )}

        {view === 'theme' && selectedSubject && (
          <div className="space-y-12 animate-in slide-in-from-bottom-6 duration-500">
            <div className="flex items-end justify-between border-b border-slate-200 pb-8">
              <div className="space-y-2">
                <span className="text-blue-600 font-black text-xs uppercase tracking-widest">{selectedGrade} / {selectedSubject.name}</span>
                <h2 className="text-5xl font-black text-slate-900">Hub thématique</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {selectedSubject.themes.map((theme: Theme) => (
                <div key={theme.id} className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm overflow-hidden relative">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div className="max-w-xl">
                      <h3 className="text-3xl font-black text-slate-900 mb-2">{theme.title}</h3>
                      <p className="text-slate-500 font-medium text-lg leading-relaxed">{theme.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {theme.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => { setSelectedTheme(theme); setSelectedLesson(lesson); setView('lesson'); }}
                        className="bg-slate-50 p-8 rounded-3xl border border-transparent hover:border-blue-500 hover:bg-blue-50 transition-all text-left flex items-center justify-between group"
                      >
                        <div>
                          <span className="block text-[10px] font-black text-slate-400 uppercase mb-1">{lesson.videoUrl ? 'Vidéo' : 'Leçon'}</span>
                          <span className="font-black text-xl text-slate-800 group-hover:text-blue-900">{lesson.title}</span>
                          <span className="block text-xs font-bold text-slate-400 mt-1">{lesson.exercises.length} exercices</span>
                        </div>
                        <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                          {lesson.videoUrl ? (
                             <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                          ) : (
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" /></svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === 'lesson' && selectedLesson && (
          <GameEngine 
            lesson={selectedLesson}
            subjectName={selectedSubject?.name || ''}
            grade={selectedGrade || ''}
            onUpdateStats={() => setUser(prev => ({ ...prev, completedExercises: prev.completedExercises + 1 }))}
            onBack={() => setView('theme')}
          />
        )}
      </main>
    </div>
  );
};

export default App;
