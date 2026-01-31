
import React, { useState, useEffect } from 'react';
import { Subject, Level, UserStats, Exercise } from '../types.ts';

interface GameEngineProps {
  subject: Subject;
  level: Level;
  user: UserStats;
  onUpdateStats: (points: number) => void;
  onFinish: () => void;
}

const GameEngine: React.FC<GameEngineProps> = ({ subject, level, user, onUpdateStats, onFinish }) => {
  const lessons = subject.levels[level];
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [view, setView] = useState<'lesson' | 'hub' | 'exercise' | 'result'>('lesson');
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState<number | null>(null);
  
  // Local state to track completed exercises for the current lesson session
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const lesson = lessons[currentLessonIndex];
  const exercises = lesson.exercises;
  const currentExercise = selectedExerciseIndex !== null ? exercises[selectedExerciseIndex] : null;

  const startExercises = () => setView('hub');
  
  const pickExercise = (index: number) => {
    setSelectedExerciseIndex(index);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setView('exercise');
  };

  const checkAnswer = (index: number) => {
    if (isAnswered || !currentExercise) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    if (index === currentExercise.correctAnswer) {
      if (!completedExercises.has(currentExercise.id)) {
        onUpdateStats(currentExercise.points);
        setCompletedExercises(prev => new Set(prev).add(currentExercise.id));
      }
    }
  };

  const backToHub = () => {
    setView('hub');
    setSelectedExerciseIndex(null);
  };

  const finishLesson = () => setView('result');

  if (view === 'result') {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-12 text-center shadow-2xl border border-gray-100 animate-in zoom-in duration-300">
        <div className="text-6xl mb-6">🏆</div>
        <h2 className="text-3xl font-black text-gray-900 mb-4">Objectif Atteint !</h2>
        <p className="text-gray-500 mb-8 text-lg">
          Tu as terminé la session pour "{lesson.title}". Tu as réussi {completedExercises.size} exercices sur {exercises.length} !
        </p>
        <button
          onClick={onFinish}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all"
        >
          Retour au menu
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
        <div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{subject.name} • {level}</span>
          <h2 className="text-2xl font-black text-gray-900">{lesson.title}</h2>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="text-sm font-bold text-gray-600">{completedExercises.size} / {exercises.length} réussis</span>
          </div>
          {view !== 'lesson' && (
            <button onClick={() => setView('lesson')} className="text-sm font-bold text-blue-600 hover:underline">Lire le cours</button>
          )}
        </div>
      </div>

      {/* VIEW: LESSON */}
      {view === 'lesson' && (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 animate-in slide-in-from-right duration-500">
          <div className={`${subject.color} h-3 w-full`}></div>
          <div className="p-8 sm:p-12">
            <div className="prose prose-blue max-w-none">
              <div className="text-gray-700 text-xl leading-relaxed whitespace-pre-wrap font-medium">
                {lesson.content}
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <button
                onClick={startExercises}
                className={`${subject.color} text-white px-12 py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-all flex items-center group`}
              >
                Passer aux exercices
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW: EXERCISE HUB */}
      {view === 'hub' && (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
            <p className="text-blue-800 font-bold text-lg">Choisis un exercice pour tester tes connaissances !</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {exercises.map((ex, idx) => {
              const isDone = completedExercises.has(ex.id);
              return (
                <button
                  key={ex.id}
                  onClick={() => pickExercise(idx)}
                  className={`relative h-24 rounded-2xl border-2 transition-all flex flex-col items-center justify-center group ${
                    isDone 
                      ? 'bg-green-50 border-green-500 text-green-700' 
                      : 'bg-white border-gray-100 hover:border-blue-500 hover:shadow-lg'
                  }`}
                >
                  <span className="text-2xl font-black">{idx + 1}</span>
                  <span className="text-[10px] font-bold uppercase mt-1 opacity-60">Exercice</span>
                  {isDone && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                      ✓
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex justify-center pt-8">
            <button
              onClick={finishLesson}
              className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-black transition-all"
            >
              Terminer la session
            </button>
          </div>
        </div>
      )}

      {/* VIEW: EXERCISE (QUIZ) */}
      {view === 'exercise' && currentExercise && (
        <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-500">
          <button onClick={backToHub} className="flex items-center text-gray-500 hover:text-blue-600 font-bold group">
             <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
             </svg>
             Retour au Hub
          </button>

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 relative">
            <div className="absolute top-8 right-8 text-blue-600 font-black text-xl">
              #{ (selectedExerciseIndex || 0) + 1 }
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-10 leading-tight pr-12">{currentExercise.question}</h3>
            
            <div className="grid grid-cols-1 gap-4">
              {currentExercise.options.map((option, index) => {
                let statusClass = "border-gray-100 hover:border-blue-400 hover:bg-blue-50/30";
                if (isAnswered) {
                  if (index === currentExercise.correctAnswer) statusClass = "bg-green-50 border-green-500 text-green-700 ring-2 ring-green-500 ring-opacity-20";
                  else if (index === selectedAnswer) statusClass = "bg-red-50 border-red-500 text-red-700 ring-2 ring-red-500 ring-opacity-20";
                  else statusClass = "opacity-40 border-gray-100";
                }

                return (
                  <button
                    key={index}
                    disabled={isAnswered}
                    onClick={() => checkAnswer(index)}
                    className={`text-left p-6 rounded-2xl border-2 transition-all font-semibold text-lg flex items-center justify-between ${statusClass}`}
                  >
                    <span>{option}</span>
                    {isAnswered && index === currentExercise.correctAnswer && <span className="text-green-600">✓</span>}
                    {isAnswered && index === selectedAnswer && index !== currentExercise.correctAnswer && <span className="text-red-600">✕</span>}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="mt-8 p-8 bg-blue-50/50 rounded-2xl border border-blue-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">💡</span>
                  <div className="flex-1">
                    <h4 className="font-black text-blue-900 text-lg mb-2">Explication</h4>
                    <p className="text-blue-800 text-lg leading-relaxed">{currentExercise.justification}</p>
                    <div className="mt-8 flex justify-end">
                      <button
                        onClick={backToHub}
                        className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-md hover:bg-blue-700 transition-all"
                      >
                        Suivant
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameEngine;
