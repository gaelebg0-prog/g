
import React, { useState, useEffect } from 'react';
import { Lesson, Exercise } from '../types.ts';

interface GameEngineProps {
  lesson: Lesson;
  subjectName: string;
  grade: string;
  onUpdateStats: () => void;
  onBack: () => void;
}

const GameEngine: React.FC<GameEngineProps> = ({ lesson: initialLesson, subjectName, grade, onUpdateStats, onBack }) => {
  const [lesson, setLesson] = useState<Lesson>(initialLesson);
  const [view, setView] = useState<'lesson' | 'hub' | 'exercise' | 'result'>('lesson');
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState<number | null>(null);
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form state for new exercise
  const [newEx, setNewEx] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    justification: ''
  });

  useEffect(() => {
    setLesson(initialLesson);
  }, [initialLesson]);

  const handleAddExercise = (e: React.FormEvent) => {
    e.preventDefault();
    const exercise: Exercise = {
      id: `custom-${Date.now()}`,
      ...newEx
    };
    setLesson(prev => ({
      ...prev,
      exercises: [...prev.exercises, exercise]
    }));
    setShowAddModal(false);
    setNewEx({
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      justification: ''
    });
  };

  const currentExercise = selectedExerciseIndex !== null ? lesson.exercises[selectedExerciseIndex] : null;

  if (view === 'result') {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-[2.5rem] p-16 text-center shadow-xl border border-slate-200 animate-in zoom-in duration-300">
        <div className="w-24 h-24 bg-green-50 text-green-600 rounded-3xl flex items-center justify-center text-5xl mx-auto mb-10">✓</div>
        <h2 className="text-4xl font-black text-slate-900 mb-4">Module Complété</h2>
        <p className="text-slate-500 mb-12 text-lg font-medium leading-relaxed">
          Félicitations ! Vous avez validé tous les acquis du module : <br/>
          <span className="text-blue-600 font-bold italic">"{lesson.title}"</span>
        </p>
        <button onClick={onBack} className="w-full bg-slate-900 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase tracking-widest">Retour au programme</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-1 block">{subjectName} • {grade}</span>
          <h2 className="text-3xl font-extrabold text-slate-900">{lesson.title}</h2>
        </div>
        <button onClick={onBack} className="text-slate-400 font-bold hover:text-red-500 transition-colors">Fermer</button>
      </div>

      {view === 'lesson' && (
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          {lesson.videoUrl && (
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src={lesson.videoUrl}
                title={lesson.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <div className="p-10 sm:p-14">
            <div className="prose prose-slate max-w-none mb-12">
              <div className="text-slate-700 text-lg leading-relaxed whitespace-pre-wrap font-medium">{lesson.content}</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100">
              <button 
                onClick={() => setView('hub')} 
                className="bg-blue-600 text-white px-12 py-4 rounded-2xl font-black text-lg shadow-blue-200 shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center flex-1"
              >
                Vérifier mes connaissances →
              </button>
              <button 
                onClick={() => setShowAddModal(true)}
                className="bg-slate-50 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 flex items-center justify-center border border-slate-200 transition-colors"
              >
                <span className="mr-2 text-xl">+</span> Ajouter un exercice
              </button>
            </div>
          </div>
        </div>
      )}

      {view === 'hub' && (
        <div className="space-y-8 animate-in slide-in-from-bottom-4">
          <div className="bg-indigo-900 text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold">Exercices d'application</h3>
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="bg-white/10 hover:bg-white/20 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-colors border border-white/20"
                >
                  + Nouveau
                </button>
              </div>
              <p className="text-indigo-200 font-medium">Validez votre apprentissage en répondant aux questions suivantes.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {lesson.exercises.map((ex, idx) => (
              <button
                key={ex.id}
                onClick={() => { setSelectedExerciseIndex(idx); setView('exercise'); setIsAnswered(false); setSelectedAnswer(null); }}
                className={`h-24 rounded-2xl border-2 transition-all flex flex-col items-center justify-center ${completedExercises.has(ex.id) ? 'bg-green-50 border-green-500 text-green-700' : 'bg-white border-slate-200 hover:border-blue-600'}`}
              >
                <span className="text-[10px] font-black text-slate-400 mb-1 uppercase">Question</span>
                <span className="text-3xl font-black">{idx + 1}</span>
              </button>
            ))}
          </div>
          
          {completedExercises.size === lesson.exercises.length && lesson.exercises.length > 0 && (
            <div className="pt-10 flex justify-center">
              <button onClick={() => setView('result')} className="bg-slate-900 text-white px-16 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all">Terminer le Module</button>
            </div>
          )}

          {lesson.exercises.length === 0 && (
            <div className="text-center py-12 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
              <p className="text-slate-500 font-medium">Aucun exercice pour le moment.</p>
              <button 
                onClick={() => setShowAddModal(true)}
                className="mt-4 text-blue-600 font-bold hover:underline"
              >
                Créez le premier exercice !
              </button>
            </div>
          )}
        </div>
      )}

      {view === 'exercise' && currentExercise && (
        <div className="space-y-8 animate-in slide-in-from-right-4">
          <div className="bg-white rounded-3xl p-10 sm:p-14 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-12">{currentExercise.question}</h3>
            
            <div className="grid grid-cols-1 gap-4">
              {currentExercise.options.map((option, index) => {
                let status = "border-slate-200 hover:border-blue-600 bg-slate-50";
                if (isAnswered) {
                  if (index === currentExercise.correctAnswer) status = "bg-green-50 border-green-500 text-green-700 ring-2 ring-green-200";
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
                  }} className={`text-left p-6 rounded-2xl border-2 transition-all font-bold text-lg flex items-center space-x-4 ${status}`}>
                    <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs text-slate-400 font-black shrink-0">{String.fromCharCode(65 + index)}</span>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="mt-12 p-10 bg-slate-900 text-white rounded-[2rem] shadow-2xl animate-in slide-in-from-top-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${selectedAnswer === currentExercise.correctAnswer ? 'bg-green-500' : 'bg-red-500'}`}>
                    {selectedAnswer === currentExercise.correctAnswer ? '✓' : '×'}
                  </div>
                  <span className="text-slate-400 font-black uppercase tracking-widest text-sm">Justification</span>
                </div>
                <p className="text-slate-200 text-lg font-medium leading-relaxed">{currentExercise.justification}</p>
                <div className="mt-10 flex gap-4">
                   <button onClick={() => setView('hub')} className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-bold transition-colors">
                    Retour aux questions
                  </button>
                  {selectedAnswer === currentExercise.correctAnswer && selectedExerciseIndex! < lesson.exercises.length - 1 && (
                    <button onClick={() => { setSelectedExerciseIndex(selectedExerciseIndex! + 1); setIsAnswered(false); setSelectedAnswer(null); }} className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold">
                      Suivant →
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal for adding exercises */}
      {showAddModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[2.5rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
            <div className="p-10">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-slate-900">Nouvel Exercice</h3>
                <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <form onSubmit={handleAddExercise} className="space-y-6">
                <div>
                  <label className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Question</label>
                  <textarea 
                    required
                    value={newEx.question}
                    onChange={e => setNewEx({...newEx, question: e.target.value})}
                    placeholder="Ex: Quelle est la capitale de la France ?"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {newEx.options.map((opt, idx) => (
                    <div key={idx}>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Option {String.fromCharCode(65+idx)}</label>
                      <input 
                        required
                        type="text"
                        value={opt}
                        onChange={e => {
                          const opts = [...newEx.options];
                          opts[idx] = e.target.value;
                          setNewEx({...newEx, options: opts});
                        }}
                        placeholder={`Réponse ${idx + 1}`}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Bonne Réponse</label>
                    <select 
                      value={newEx.correctAnswer}
                      onChange={e => setNewEx({...newEx, correctAnswer: parseInt(e.target.value)})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
                    >
                      {newEx.options.map((_, idx) => (
                        <option key={idx} value={idx}>Option {String.fromCharCode(65 + idx)}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Justification</label>
                    <input 
                      required
                      type="text"
                      value={newEx.justification}
                      onChange={e => setNewEx({...newEx, justification: e.target.value})}
                      placeholder="Expliquez pourquoi c'est la bonne réponse"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl shadow-xl transition-all uppercase tracking-widest"
                  >
                    Ajouter au cours
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameEngine;
