
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

  const lesson = lessons[currentLessonIndex] || { title: 'Bientôt disponible', content: 'Le contenu pour ce niveau arrive bientôt !', exercises: [] };
  const exercises = lesson.exercises;
  const currentExercise = selectedExerciseIndex !== null ? exercises[selectedExerciseIndex] : null;

  const downloadLesson = () => {
    const element = document.createElement("a");
    const file = new Blob([`COURS : ${lesson.title}\nMATIERE : ${subject.name}\nNIVEAU : ${level}\n\n${lesson.content}`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${subject.id}_${level}_cours.txt`;
    document.body.appendChild(element);
    element.click();
  };

  if (view === 'result') {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-12 text-center shadow-2xl border border-gray-100">
        <div className="text-6xl mb-6">✅</div>
        <h2 className="text-3xl font-black text-gray-900 mb-4">Leçon Terminée</h2>
        <p className="text-gray-500 mb-8 text-lg">Tu as complété tous les exercices de "{lesson.title}".</p>
        <button onClick={onFinish} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all">Retour aux thèmes</button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      <div className="flex justify-between items-center px-2">
        <button onClick={onBack} className="text-gray-500 font-bold hover:text-blue-600">← Retour</button>
        <div className="text-right">
          <span className="block text-xs font-bold text-gray-400 uppercase">{subject.name} • {level}</span>
          <h2 className="text-xl font-black text-gray-900">{lesson.title}</h2>
        </div>
      </div>

      {view === 'lesson' && (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 animate-in slide-in-from-right">
          <div className={`${subject.color} h-3 w-full`}></div>
          <div className="p-8 sm:p-12">
            <div className="prose prose-blue max-w-none mb-10">
              <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">{lesson.content}</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={downloadLesson} className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 flex items-center justify-center">
                📥 Télécharger la fiche de cours
              </button>
              <button onClick={() => setView('hub')} className={`${subject.color} text-white px-12 py-4 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-all flex items-center justify-center`}>
                Pratiquer les exercices →
              </button>
            </div>
          </div>
        </div>
      )}

      {view === 'hub' && (
        <div className="space-y-8 animate-in fade-in">
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
            <p className="text-blue-800 font-bold">Liste des exercices disponibles</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {exercises.map((ex, idx) => (
              <button
                key={ex.id}
                onClick={() => { setSelectedExerciseIndex(idx); setView('exercise'); setIsAnswered(false); setSelectedAnswer(null); }}
                className={`h-20 rounded-2xl border-2 transition-all flex flex-col items-center justify-center ${completedExercises.has(ex.id) ? 'bg-green-50 border-green-500 text-green-700' : 'bg-white border-gray-100 hover:border-blue-500'}`}
              >
                <span className="text-xl font-black">{idx + 1}</span>
              </button>
            ))}
          </div>
          {completedExercises.size > 0 && (
            <div className="flex justify-center pt-8">
              <button onClick={() => setView('result')} className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold shadow-lg">Valider la leçon</button>
            </div>
          )}
        </div>
      )}

      {view === 'exercise' && currentExercise && (
        <div className="space-y-6 animate-in slide-in-from-bottom-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-10">{currentExercise.question}</h3>
            <div className="grid grid-cols-1 gap-4">
              {currentExercise.options.map((option, index) => {
                let status = "border-gray-100 hover:border-blue-500";
                if (isAnswered) {
                  if (index === currentExercise.correctAnswer) status = "bg-green-50 border-green-500 text-green-700 ring-2 ring-green-500 ring-opacity-20";
                  else if (index === selectedAnswer) status = "bg-red-50 border-red-500 text-red-700";
                  else status = "opacity-40 grayscale";
                }
                return (
                  <button key={index} disabled={isAnswered} onClick={() => {
                    setSelectedAnswer(index); setIsAnswered(true);
                    if (index === currentExercise.correctAnswer) {
                      onUpdateStats();
                      setCompletedExercises(p => new Set(p).add(currentExercise.id));
                    }
                  }} className={`text-left p-6 rounded-2xl border-2 transition-all font-semibold text-lg ${status}`}>
                    {option}
                  </button>
                );
              })}
            </div>
            {isAnswered && (
              <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-blue-900 font-medium mb-4">Explication : {currentExercise.justification}</p>
                <button onClick={() => setView('hub')} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold">Retour au Hub</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameEngine;
