
import React from 'react';
import { SUBJECTS } from '../data/subjects';
import { Subject } from '../types';

interface SubjectSelectorProps {
  onSelect: (subject: Subject) => void;
}

const SubjectSelector: React.FC<SubjectSelectorProps> = ({ onSelect }) => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900">Que veux-tu apprendre aujourd'hui ?</h1>
        <p className="text-gray-500 text-lg">Sélectionne une matière pour commencer ton aventure.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SUBJECTS.map((subject) => (
          <button
            key={subject.id}
            onClick={() => onSelect(subject)}
            className="group relative bg-white p-8 rounded-3xl border-2 border-transparent hover:border-blue-500 hover:shadow-2xl transition-all duration-300 text-left overflow-hidden"
          >
            <div className={`${subject.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {subject.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{subject.name}</h3>
            <p className="text-gray-500 text-sm">Découvre des cours passionnants et teste tes connaissances.</p>
            
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelector;
