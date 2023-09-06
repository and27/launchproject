import { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { loginWithGoogle, supabase } from "./utils/supabase";

const handleLogin = async () => {
  await loginWithGoogle();
};

const handleLogout = async () => {
  await supabase.auth.signOut();
};

export async function setupLogin(element: HTMLElement) {
  element.addEventListener("click", handleLogin);

  const supabaseListener = () => {
    supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        if (event == "SIGNED_IN") {
          const userId = session?.user?.id;
          userId && localStorage.setItem("userId", userId as string);
          const userName = session?.user?.identities?.[0]?.identity_data?.name;
          element.innerHTML = `${userName}`;
          element.removeEventListener("click", handleLogin);
          element.addEventListener("click", handleLogout);
        }

        if (event == "SIGNED_OUT") {
          element.innerHTML = "Login";
          element.addEventListener("click", handleLogin);
        }
      }
    );
  };

  supabaseListener();
}
