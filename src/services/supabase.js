import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Auth
export const loginWithEmail = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
};

export const signupWithEmail = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

// Goals
export const createGoal = async (userId, goal) => {
  const { data, error } = await supabase
    .from('goals')
    .insert([{ user_id: userId, ...goal }]);
  return { data, error };
};

export const getGoals = async (userId) => {
  const { data, error } = await supabase
    .from('goals')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  return { data, error };
};

// Missions
export const createMission = async (userId, mission) => {
  const { data, error } = await supabase
    .from('missions')
    .insert([{ user_id: userId, ...mission }]);
  return { data, error };
};

export const getMissions = async (userId) => {
  const { data, error } = await supabase
    .from('missions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  return { data, error };
};

// Proofs
export const uploadProof = async (userId, proof) => {
  const { data, error } = await supabase
    .from('proofs')
    .insert([{ user_id: userId, ...proof }]);
  return { data, error };
};

export const getProofs = async (userId) => {
  const { data, error } = await supabase
    .from('proofs')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  return { data, error };
};

// Profiles
export const updateProfile = async (userId, updates) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId);
  return { data, error };
};

export const getProfile = async (userId) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  return { data, error };
};
