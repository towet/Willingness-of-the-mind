import { GoogleGenerativeAI } from '@google/generative-ai';
import { WorkoutPreferences } from '../types/fitness';

// Initialize the Gemini API with configuration
const genAI = new GoogleGenerativeAI("AIzaSyBJmA19DWMeqysU_dNIlbDJm98uFsc4UUU");

// Initialize the Gemini API with configuration
const createSystemPrompt = (preferences: WorkoutPreferences | undefined, userPrompt: string) => {
  const preferencesContext = preferences 
    ? `\nUser Preferences:\n- Fitness Level: ${preferences.fitnessLevel}\n- Workout Type: ${preferences.workoutType}\n- Duration: ${preferences.duration}\n- Equipment Available: ${preferences.equipment}`
    : '';

  return `You are a knowledgeable and motivating fitness coach specializing in generating structured workout plans. When asked to generate exercises, ALWAYS return ONLY a valid JSON array with no additional text or markdown formatting.

Key Instructions:
1. Return ONLY valid JSON arrays for exercise requests
2. Each exercise must have: name, sets, reps, description, modifications, and tips
3. Keep descriptions clear and concise
4. Include appropriate modifications for different fitness levels
5. Focus on proper form and safety in tips${preferencesContext}

User Request: ${userPrompt}`;
};

export async function getFitnessGeminiResponse(prompt: string, preferences?: WorkoutPreferences) {
  try {
    console.log('Sending request with prompt:', prompt);
    console.log('User preferences:', preferences);

    const fullPrompt = createSystemPrompt(preferences, prompt);
    console.log('Full prompt:', fullPrompt);

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-pro",
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      }
    });

    const result = await model.generateContent(fullPrompt);
    if (!result.response) {
      throw new Error('No response received from the API');
    }
    
    const response = await result.response;
    console.log('API Response:', response);
    return response.text();
  } catch (error: any) {
    console.error('Error getting fitness response:', error);
    return "[]"; // Return empty JSON array on error
  }
}
