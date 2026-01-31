
import React from 'react';
import { SUBJECTS } from '../data/subjects.ts';
import { Subject, Level } from '../types.ts';

interface SubjectSelectorProps {
  level: Level;
  onSelect: (subject: Subject) => void;
}

const SubjectSelector: React.FC<SubjectSelectorProps> = ({ level, onSelect }) => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
          Rayon des <span className="text-blue-600">Matières</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Prêt pour le programme "{level}" ? Choisis ton défi.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SUBJECTS.map((subject) => (
          <button
            key={subject.id}
            onClick={() => onSelect(subject)}
            className="group relative bg-white p-8 rounded-[2.5rem] border-2 border-transparent hover:border-blue-500 hover:shadow-2xl transition-all duration-300 text-left overflow-hidden flex flex-col min-h-[220px]"
          >
            <div className={`${subject.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
              {subject.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{subject.name}</h3>
            <p className="text-gray-500 text-sm flex-grow">Parcours complet avec cours et exercices interactifs.</p>
            
            <div className="mt-6 flex items-center text-blue-600 font-bold text-sm">
              Explorer
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelector;
