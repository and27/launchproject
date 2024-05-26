import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://cuwenkgbvcblrwwvirup.supabase.co",
  import.meta.env.VITE_SUPA as string
);

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

export const getProjectName = async (projectId: number) => {
  const { data, error } = await supabase
    .from("project")
    .select("name")
    .eq("id", projectId);
  return { data, error };
};

export const addProject = async (project: any) => {
  const { data, error } = await supabase
    .from("project")
    .insert(project)
    .select();
  return { data, error };
};

export const addProjectSurvey = async (survey: any) => {
  const surveyInfo = {
    user: survey.user,
    idea: survey.idea,
    concept: survey.concept,
    mvp: survey.mvp,
    mvp_launch: survey.mvp_launch,
    project: survey.project,
  };

  const { data, error } = await supabase
    .from("project_survey")
    .insert(surveyInfo)
    .select();
  return { data, error };
};

export const addRoadmapStageResponse = async (roadmapStage: any) => {
  const { data, error } = await supabase
    .from("roadmap_stage")
    .insert(roadmapStage)
    .select();
  return { data, error };
};
