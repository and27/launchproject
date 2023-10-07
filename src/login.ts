import { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { loginWithGoogle, supabase } from "./utils/supabase";
import { goToHome, goToProfile } from "./routes";

const handleLogin = async () => {
  await loginWithGoogle();
};

const handleLogout = async () => {
  await supabase.auth.signOut();
};

const toggleDropdown = () => {
  const userId = localStorage.getItem("userId");
  let dropdown = document.getElementById("userDropdown");
  if (userId) {
    dropdown?.classList.toggle("show");
  } else {
    handleLogin();
  }
};

export async function setupLogin(element: HTMLElement) {
  element.addEventListener("click", () => toggleDropdown());

  const logoutButton = document.querySelector(".dropdown-content:last-child");
  logoutButton?.addEventListener("click", handleLogout);

  const supabaseListener = () => {
    supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        if (event == "SIGNED_IN") {
          const userId = session?.user?.id;
          console.log("setting user id", userId);
          userId && localStorage.setItem("userId", userId as string);
          const userName = session?.user?.identities?.[0]?.identity_data?.email;

          element.innerHTML = `${userName}`;
          goToProfile();
        }

        if (event == "SIGNED_OUT") {
          element.innerHTML = "Login";
          localStorage.removeItem("userId");
          goToHome();
        }
      }
    );
  };

  supabaseListener();
}
