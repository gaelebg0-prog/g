
export type Level = 'Primaire' | 'Collège' | 'Lycée';

export type SubjectId = 'maths' | 'francais' | 'sciences' | 'histoire' | 'geographie' | 'anglais' | 'informatique' | 'arts' | 'civisme' | 'ecologie';

export interface Exercise {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  justification: string;
  points: number;
  completed?: boolean;
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
  completedExercises: number;
}

// Fix: added missing LeaderboardEntry interface used in Leaderboard component
export interface LeaderboardEntry {
  username: string;
  xp: number;
  avatar: string;
}
