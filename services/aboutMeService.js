const ABOUT_ME_API_URL =
  "https://baconipsum.com/api/?type=meat-and-filler&paras=2&format=text";

export async function getAboutMe() {
  try {
    const aboutMeResponse = await fetch(ABOUT_ME_API_URL);
    if (!aboutMeResponse.ok) {
      throw new Error("failed creating about me");
    }

    const aboutMe = await aboutMeResponse.json();
    console.log(aboutMe);

    return aboutMe;
  } catch (error) {
    console.error("Error fetching aboutMe:", error.message);
    return null;
  }
}
