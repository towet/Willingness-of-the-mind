import { getFitnessGeminiResponse } from './fitnessGemini';

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  description: string;
  modifications?: string[];
  tips?: string[];
}

export interface WorkoutSection {
  title: string;
  exercises: Exercise[];
}

const sampleExercises: Record<string, Exercise[]> = {
  'warm-up': [
    {
      name: "Dynamic Stretching",
      sets: 1,
      reps: "30 seconds each",
      description: "Perform dynamic stretches targeting major muscle groups",
      modifications: ["Reduce range of motion", "Increase range of motion"],
      tips: ["Keep movements controlled", "Breathe steadily"]
    }
  ],
  'main-workout': [
    {
      name: "Cardio Intervals",
      sets: 3,
      reps: "1 minute each",
      description: "High-intensity cardio intervals with rest periods",
      modifications: ["Lower intensity", "Increase duration"],
      tips: ["Maintain proper form", "Stay hydrated"]
    }
  ],
  'cool-down': [
    {
      name: "Static Stretching",
      sets: 1,
      reps: "30 seconds each",
      description: "Hold each stretch to release muscle tension",
      modifications: ["Gentle stretching", "Deeper stretches"],
      tips: ["Don't bounce", "Breathe deeply"]
    }
  ]
};

export const generateWorkoutSection = async (
  category: string,
  type: string,
  section: 'Warm-up' | 'Main Workout' | 'Cool-down'
): Promise<Exercise[]> => {
  const prompt = `Generate a ${section.toLowerCase()} routine for ${category} - ${type}. 
Return ONLY a JSON array of exercises in this EXACT format, with no additional text or markdown:
[
  {
    "name": "Exercise Name",
    "sets": 3,
    "reps": "rep count or duration",
    "description": "detailed instruction",
    "modifications": ["easier version", "harder version"],
    "tips": ["form tip 1", "form tip 2"]
  }
]`;

  try {
    const response = await getFitnessGeminiResponse(prompt);
    
    // Try to find a JSON array in the response
    const jsonMatch = response.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      console.error('No JSON array found in response');
      return sampleExercises[section.toLowerCase().replace(' ', '-')] || [];
    }
    
    try {
      const exercises = JSON.parse(jsonMatch[0]) as Exercise[];
      return exercises.map(exercise => ({
        ...exercise,
        sets: Number(exercise.sets) || 1,
        modifications: Array.isArray(exercise.modifications) ? exercise.modifications : [],
        tips: Array.isArray(exercise.tips) ? exercise.tips : []
      }));
    } catch (parseError) {
      console.error('Error parsing workout JSON:', parseError);
      return sampleExercises[section.toLowerCase().replace(' ', '-')] || [];
    }
  } catch (error) {
    console.error(`Error generating ${section}:`, error);
    return sampleExercises[section.toLowerCase().replace(' ', '-')] || [];
  }
};
