
import React, { useState, useEffect } from 'react';
import { Subject, Level, UserStats, Exercise } from '../types.ts';

interface GameEngineProps {
  subject: Subject;
  level: Level;
  user: UserStats;
  onUpdateStats: () => void;
  onFinish: () => void;
  onBack: () => void;
}

const GameEngine: React.FC<GameEngineProps> = ({ subject, level, user, onUpdateStats, onFinish, onBack }) => {
  const lessons = subject.levels[level];
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [view, setView] = useState<'lesson' | 'hub' | 'exercise' | 'result'>('lesson');
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState<number | null>(null);
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const lesson = lessons[currentLessonIndex] || { title: 'Module en cours de déploiement', content: 'Ce module sera disponible prochainement dans votre interface étudiant.', exercises: [] };
  const exercises = lesson.exercises;
  const currentExercise = selectedExerciseIndex !== null ? exercises[selectedExerciseIndex] : null;

  const downloadLesson = () => {
    const element = document.createElement("a");
    const file = new Blob([`SYNTHÈSE DE COURS : ${lesson.title}\nMATIÈRE : ${subject.name}\nNIVEAU : ${level}\n\n${lesson.content}`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `EduQuest_${subject.id}_${level}_synthese.txt`;
    document.body.appendChild(element);
    element.click();
  };

  if (view === 'result') {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-16 text-center shadow-sm border border-slate-200">
        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-8">✓</div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Module Validé</h2>
        <p className="text-slate-500 mb-10 text-lg font-medium">Vous avez complété l'intégralité des exercices pour l'unité : <br/><span className="text-slate-900 font-bold">"{lesson.title}"</span>.</p>
        <button onClick={onFinish} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all">Terminer la session</button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12 animate-in fade-in">
      <div className="flex justify-between items-end border-b border-slate-200 pb-6">
        <div className="space-y-1">
          <button onClick={onBack} className="text-slate-400 font-bold hover:text-blue-600 text-sm mb-4 flex items-center transition-colors">
             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7" />
              </svg>
             Retour aux modules
          </button>
          <div className="flex items-center space-x-3">
             <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider">{subject.name}</span>
             <span className="text-slate-300">/</span>
             <span className="text-slate-500 font-bold text-sm uppercase tracking-widest">{level}</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900">{lesson.title}</h2>
        </div>
      </div>

      {view === 'lesson' && (
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-200">
          <div className="p-10 sm:p-14">
            <div className="prose prose-slate max-w-none mb-12">
              <div className="text-slate-700 text-lg leading-relaxed whitespace-pre-wrap font-medium">{lesson.content}</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100">
              <button onClick={downloadLesson} className="bg-slate-50 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 flex items-center justify-center transition-colors border border-slate-200">
                📥 Télécharger la fiche de synthèse
              </button>
              <button onClick={() => setView('hub')} className="bg-blue-600 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-blue-200 shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center">
                Démarrer l'évaluation
              </button>
            </div>
          </div>
        </div>
      )}

      {view === 'hub' && (
        <div className="space-y-8">
          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <h3 className="text-blue-900 font-bold text-xl mb-2">Centre d'évaluation</h3>
            <p className="text-blue-700 font-medium">Sélectionnez une question pour valider vos acquis sur ce module.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {exercises.map((ex, idx) => (
              <button
                key={ex.id}
                onClick={() => { setSelectedExerciseIndex(idx); setView('exercise'); setIsAnswered(false); setSelectedAnswer(null); }}
                className={`h-24 rounded-2xl border-2 transition-all flex flex-col items-center justify-center ${completedExercises.has(ex.id) ? 'bg-green-50 border-green-500 text-green-700' : 'bg-white border-slate-200 hover:border-blue-600'}`}
              >
                <span className="text-xs font-black text-slate-400 mb-1">QUEST.</span>
                <span className="text-2xl font-black">{idx + 1}</span>
              </button>
            ))}
          </div>
          {completedExercises.size === exercises.length && exercises.length > 0 && (
            <div className="flex justify-center pt-8">
              <button onClick={() => setView('result')} className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all">Valider l'unité d'enseignement</button>
            </div>
          )}
        </div>
      )}

      {view === 'exercise' && currentExercise && (
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white rounded-3xl p-10 sm:p-14 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-12 leading-snug">{currentExercise.question}</h3>
            <div className="grid grid-cols-1 gap-4">
              {currentExercise.options.map((option, index) => {
                let status = "border-slate-200 hover:border-blue-600 bg-slate-50";
                if (isAnswered) {
                  if (index === currentExercise.correctAnswer) status = "bg-green-50 border-green-500 text-green-700";
                  else if (index === selectedAnswer) status = "bg-red-50 border-red-500 text-red-700";
                  else status = "opacity-40 grayscale pointer-events-none";
                }
                return (
                  <button key={index} disabled={isAnswered} onClick={() => {
                    setSelectedAnswer(index); setIsAnswered(true);
                    if (index === currentExercise.correctAnswer) {
                      onUpdateStats();
                      setCompletedExercises(p => new Set(p).add(currentExercise.id));
                    }
                  }} className={`text-left p-6 rounded-2xl border-2 transition-all font-bold text-lg ${status}`}>
                    {option}
                  </button>
                );
              })}
            </div>
            {isAnswered && (
              <div className="mt-12 p-8 bg-slate-900 text-white rounded-3xl animate-in slide-in-from-top-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${selectedAnswer === currentExercise.correctAnswer ? 'bg-green-500' : 'bg-red-500'}`}>
                    {selectedAnswer === currentExercise.correctAnswer ? '✓' : '×'}
                  </div>
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Analyse de la réponse</span>
                </div>
                <p className="text-slate-300 font-medium leading-relaxed">{currentExercise.justification}</p>
                <button onClick={() => setView('hub')} className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors w-full sm:w-auto">
                  Continuer
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameEngine;
