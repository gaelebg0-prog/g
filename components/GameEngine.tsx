
import React, { useState } from 'react';
import { Subject, Level, Lesson, Exercise, UserStats } from '../types';

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
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [view, setView] = useState<'lesson' | 'exercise' | 'result'>('lesson');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const lesson = lessons[currentLessonIndex];
  const exercise = lesson.exercises[currentExerciseIndex];

  const handleNext = () => {
    if (view === 'lesson') {
      setView('exercise');
    } else if (view === 'exercise' && isAnswered) {
      if (currentExerciseIndex < lesson.exercises.length - 1) {
        setCurrentExerciseIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setView('result');
      }
    }
  };

  const checkAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === exercise.correctAnswer) {
      onUpdateStats(exercise.points);
    }
  };

  if (view === 'result') {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-12 text-center shadow-2xl border border-gray-100">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-3xl font-black text-gray-900 mb-4">Leçon Terminée !</h2>
        <p className="text-gray-500 mb-8 text-lg">Tu as complété "{lesson.title}". Continue comme ça pour grimper dans le classement !</p>
        <button
          onClick={onFinish}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:scale-105"
        >
          Retour au menu
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-2 px-2">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{subject.name} • {level}</span>
        </div>
        <div className="text-sm font-bold text-blue-600">Leçon {currentLessonIndex + 1}/{lessons.length}</div>
      </div>

      {view === 'lesson' ? (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className={`${subject.color} h-2 w-full`}></div>
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl font-black text-gray-900 mb-6">{lesson.title}</h2>
            <div className="prose prose-blue max-w-none text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
              {lesson.content}
            </div>
            <div className="mt-12 flex justify-end">
              <button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition-all flex items-center group"
              >
                Commencer les exercices
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div 
              className="bg-blue-500 h-full transition-all duration-500" 
              style={{ width: `${((currentExerciseIndex + 1) / lesson.exercises.length) * 100}%` }}
            ></div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{exercise.question}</h3>
            
            <div className="grid grid-cols-1 gap-4">
              {exercise.options.map((option, index) => {
                let statusClass = "border-gray-100 hover:border-blue-400";
                if (isAnswered) {
                  if (index === exercise.correctAnswer) statusClass = "bg-green-50 border-green-500 text-green-700 ring-2 ring-green-500 ring-opacity-20";
                  else if (index === selectedAnswer) statusClass = "bg-red-50 border-red-500 text-red-700 ring-2 ring-red-500 ring-opacity-20";
                  else statusClass = "opacity-50 border-gray-100";
                }

                return (
                  <button
                    key={index}
                    disabled={isAnswered}
                    onClick={() => checkAnswer(index)}
                    className={`text-left p-6 rounded-2xl border-2 transition-all font-semibold text-lg flex items-center justify-between ${statusClass}`}
                  >
                    <span>{option}</span>
                    {isAnswered && index === exercise.correctAnswer && (
                      <span className="text-green-600">✅</span>
                    )}
                    {isAnswered && index === selectedAnswer && index !== exercise.correctAnswer && (
                      <span className="text-red-600">❌</span>
                    )}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                  💡 Explication
                </h4>
                <p className="text-blue-800 leading-relaxed">{exercise.justification}</p>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-md transition-all"
                  >
                    Suivant
                  </button>
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
