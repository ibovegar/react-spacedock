export interface Mission {
  id: string;
  type: 'rescue' | 'mining' | 'salvage' | 'tactical' | 'exploration';
  inProgress: boolean;
  completed: boolean;
  title: string;
  description: string;
  credits: number;
  difficulty: 'hard' | 'medium' | 'easy' | 'unknown';
  constellation: string;
  distance: number;
  ascention: string;
  declination: string;
}
