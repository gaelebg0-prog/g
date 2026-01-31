
export type Level = 'Collège' | 'Lycée';

export type Grade = 
  | '6ème' | '5ème' | '4ème' | '3ème' // Collège
  | 'Seconde' | 'Première' | 'Terminale'; // Lycée

export interface Exercise {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  justification: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
  exercises: Exercise[];
}

export interface Theme {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  themes: Theme[];
}

export interface GradeContent {
  grade: Grade;
  subjects: Subject[];
}

export interface UserStats {
  username: string;
  completedExercises: number;
}

export interface LeaderboardEntry {
  username: string;
  xp: number;
  avatar: string;
}
