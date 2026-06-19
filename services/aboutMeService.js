const ABOUT_ME_API_URL =
  "https://baconipsum.com/api/?type=meat-and-filler&paras=2&format=json";

export async function getAboutMe() {
  try {
    const aboutMeResponse = await fetch(ABOUT_ME_API_URL);
    if (!aboutMeResponse.ok) {
      throw new Error("failed creating About Me");
    }

    let aboutMe = await aboutMeResponse.json();
    aboutMe = aboutMe.join("\n\n");
    console.log(aboutMe);

    return aboutMe;
  } catch (error) {
    console.error("Error fetching aboutMe:", error.message);
    return null;
  }
}
