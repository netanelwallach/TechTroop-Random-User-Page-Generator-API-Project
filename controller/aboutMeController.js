import { getAboutMe } from "../services/aboutMeService.js";

export async function initAboutMeController() {
  try {
    const aboutMeData = await getAboutMe();
    if (!aboutMeData) return;

    initAboutMe(aboutMeData);
  } catch (error) {
    console.error("Controller Error:", error);
  }
}

function initAboutMe(aboutMeData) {
  const aboutMe = document.getElementById("about-me");
  aboutMe.textContent = aboutMeData;
}
