import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://cuwenkgbvcblrwwvirup.supabase.co",
  import.meta.env.VITE_SUPA as string
);
export const login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "andro@gmail.com",
    password: "qetadg77Y",
  });
  return { data, error };
};

export const loginWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        prompt: "consent",
      },
      redirectTo: "https://cuwenkgbvcblrwwvirup.supabase.co/auth/v1/callback",
    },
  });

  return { data, error };
};

export const getUserInfoFromId = async (id: number) => {
  const { data, error } = await supabase.from("user").select().eq("userid", id);
  return { data, error };
};

export const addUserSurvey = async (survey: any) => {
  const { data, error } = await supabase.from("survey").insert(survey).select();
  return { data, error };
};

export const addQuestionAnswer = async (questionAnswer: any) => {
  const { data, error } = await supabase
    .from("question-answer")
    .insert(questionAnswer)
    .select();
  return { data, error };
};
