
export type Level = 'Primaire' | 'Collège' | 'Lycée';

export type SubjectId = 'maths' | 'francais' | 'sciences' | 'histoire';

export interface Exercise {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  justification: string;
  points: number;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  exercises: Exercise[];
}

export interface Subject {
  id: SubjectId;
  name: string;
  icon: string;
  color: string;
  levels: Record<Level, Lesson[]>;
}

export interface UserStats {
  username: string;
  xp: number;
  completedExercises: number;
  rank: number;
  level: number;
}

export interface LeaderboardEntry {
  username: string;
  xp: number;
  avatar: string;
}
