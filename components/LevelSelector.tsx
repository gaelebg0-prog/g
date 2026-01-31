
import React from 'react';
import { Subject, Level } from '../types';

interface LevelSelectorProps {
  subject: Subject;
  onSelect: (level: Level) => void;
  onBack: () => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ subject, onSelect, onBack }) => {
  const levels: Level[] = ['Primaire', 'Collège', 'Lycée'];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-500 hover:text-blue-600 font-semibold transition-colors group"
      >
        <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Retour aux matières
      </button>

      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
        <div className={`${subject.color} w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-xl`}>
          {subject.icon}
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-2">{subject.name}</h2>
        <p className="text-gray-500 max-w-md">Chaque niveau propose des exercices adaptés et un programme complet.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => onSelect(level)}
            className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all text-center group"
          >
            <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Niveau</div>
            <h3 className="text-xl font-bold text-gray-800">{level}</h3>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-50 text-blue-600 py-2 rounded-xl text-sm font-bold">
              C'est parti !
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelSelector;
