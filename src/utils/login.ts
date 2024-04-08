import { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { loginWithGoogle, supabase } from "./supabase";
import { goToHome, goToRoadmap } from "./routes";
import { closeDropdown } from "../components/dropdown";

const handleLogin = async () => {
  await loginWithGoogle();
};

export const handleLogout = async (e: Event) => {
  e.stopPropagation();
  await supabase.auth.signOut();
  closeDropdown();
};

export const toggleDropdown = (e: Event) => {
  e.stopPropagation();
  const userId = localStorage.getItem("userId");
  let dropdown = document.getElementById("userDropdown");
  if (userId) {
    dropdown?.classList.toggle("show");
  } else {
    handleLogin();
  }
};

export async function setupLogin(dropdown: HTMLElement) {
  const loginButton = dropdown.querySelector(
    "#loginButton"
  )! as HTMLButtonElement;

  loginButton.addEventListener("click", toggleDropdown);
  const logoutButton = document.querySelector(".dropdown-content>a:last-child");
  logoutButton?.addEventListener("click", handleLogout);

  const supabaseListener = () => {
    supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        if (event == "SIGNED_IN") {
          const user = localStorage.getItem("userId");
          if (user) return;
          const userId = session?.user?.id;
          userId && localStorage.setItem("userId", userId as string);
          const parsedEmail = session?.user?.email?.split("@")[0];
          loginButton.innerHTML = `${parsedEmail}`;
          goToRoadmap();
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
