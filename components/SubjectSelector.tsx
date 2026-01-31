
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
      <div className="space-y-3">
        <h2 className="text-4xl font-extrabold text-slate-900">
          Cursus <span className="text-blue-600">{level}</span>
        </h2>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">
          Sélectionnez une unité d'enseignement pour accéder aux modules de cours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUBJECTS.map((subject) => (
          <button
            key={subject.id}
            onClick={() => onSelect(subject)}
            className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all text-left flex items-start space-x-6"
          >
            <div className="bg-slate-50 w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-blue-50 transition-colors">
              {subject.icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">{subject.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">Modules de révision complets et exercices d'application.</p>
              <div className="pt-2 text-xs font-bold text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Ouvrir le module →
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelector;
