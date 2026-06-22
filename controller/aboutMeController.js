import { getAboutMe } from "../services/aboutMeService.js";

export async function initAboutMeController() {
  try {
    const aboutMeData = await getAboutMe();
    if (!aboutMeData) return;

    renderAboutMe(aboutMeData);
  } catch (error) {
    console.error("Controller Error:", error);
  }
}

export function renderAboutMe(aboutMeData) {
  const aboutMe = document.getElementById("about-me");
  aboutMe.textContent = aboutMeData;
}
