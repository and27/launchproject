import { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { loginWithGoogle, supabase } from "./supabase";
import { goToHome, goToProfile } from "./routes";

const handleLogin = async () => {
  await loginWithGoogle();
};

const handleLogout = async () => {
  await supabase.auth.signOut();
};

export const toggleDropdown = () => {
  const userId = localStorage.getItem("userId");
  let dropdown = document.getElementById("userDropdown");
  if (userId) {
    dropdown?.classList.toggle("show");
  } else {
    handleLogin();
  }
};

export async function setupLogin(loginButton: HTMLElement) {
  loginButton.addEventListener("click", () => toggleDropdown());

  const logoutButton = document.querySelector(".dropdown-content:last-child");
  logoutButton?.addEventListener("click", handleLogout);

  const supabaseListener = () => {
    supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        if (event == "SIGNED_IN") {
          const userId = session?.user?.id;
          userId && localStorage.setItem("userId", userId as string);
          const parsedEmail = session?.user?.email?.split("@")[0];
          loginButton.innerHTML = `${parsedEmail}`;
          goToProfile();
        }

        if (event == "SIGNED_OUT") {
          loginButton.innerHTML = "Login";
          localStorage.removeItem("userId");
          goToHome();
        }
      }
    );
  };

  supabaseListener();
}
