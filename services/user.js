const USER_API_URL = "https://randomuser.me/api/?results=7";

async function getUsers() {
  try {
    const userResponse = await fetch(USER_API_URL);
    if (!userResponse.ok) {
      throw new Error("User not found");
    }

    const users = await userResponse.json();
  } catch (error) {
    console.error("Error fetching users:", error.message);
    return null;
  }
}
