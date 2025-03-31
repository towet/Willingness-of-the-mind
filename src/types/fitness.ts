export type WorkoutType = 'strength' | 'cardio' | 'flexibility' | 'hiit' | 'bodyweight';
export type FitnessLevel = 'beginner' | 'intermediate' | 'advanced';
export type Duration = '15min' | '30min' | '45min' | '60min';
export type Equipment = 'none' | 'basic' | 'full-gym';

export interface WorkoutPreferences {
  fitnessLevel: FitnessLevel;
  workoutType: WorkoutType;
  duration: Duration;
  equipment: Equipment;
}
