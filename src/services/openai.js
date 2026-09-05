import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export const askLumaCoach = async (question, context = '') => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are LUMA, a personal progress coach. You are direct, encouraging, and action-focused. 
          You help people turn intentions into real-world progress. 
          Keep responses to 2-3 sentences max. No fluff. Just truth.
          ${context ? `Context: ${context}` : ''}`,
        },
        { role: 'user', content: question },
      ],
      max_tokens: 150,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI error:', error);
    return "Let's focus on what you can do right now. What's the smallest next step?";
  }
};

export const generateMissionPlan = async (goal) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are LUMA's AI mission planner. Generate 5 concrete, actionable missions to achieve this goal.
          Format: Return a JSON array of missions with structure: [{title: string, duration: number in minutes, priority: 'low'|'medium'|'high'}]
          Be specific. No vague tasks.`,
        },
        { role: 'user', content: `Goal: ${goal}` },
      ],
      max_tokens: 500,
    });

    const text = response.choices[0].message.content;
    const jsonMatch = text.match(/\[.*\]/s);
    return jsonMatch ? JSON.parse(jsonMatch[0]) : [];
  } catch (error) {
    console.error('Mission planning error:', error);
    return [];
  }
};

export const detectObstacles = async (goalText, missionHistory) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are LUMA's obstacle detector. Analyze patterns and identify what's blocking progress.
          Be specific and actionable. Return 1-2 sentences.`,
        },
        {
          role: 'user',
          content: `Goal: ${goalText}\nRecent activity: ${missionHistory}\n\nWhat's blocking progress?`,
        },
      ],
      max_tokens: 100,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Obstacle detection error:', error);
    return null;
  }
};

export const energyMatchAI = async (userProfile) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are LUMA's energy matcher. Analyze when this person has the most energy and ships best.
          Return ONLY a 24-hour time (0-23) as a number.`,
        },
        {
          role: 'user',
          content: `User data: ${JSON.stringify(userProfile)}\n\nWhat hour should they schedule their hardest mission?`,
        },
      ],
      max_tokens: 10,
    });

    const hour = parseInt(response.choices[0].message.content);
    return isNaN(hour) ? 10 : Math.max(0, Math.min(23, hour));
  } catch (error) {
    console.error('Energy match error:', error);
    return 10; // Default morning
  }
};
