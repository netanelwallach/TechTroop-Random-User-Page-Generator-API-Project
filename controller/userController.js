import { getUsers } from "../services/userModel.js";

export async function initUserController() {
  try {
    const userData = await getUsers();
    if (!userData) return;

    const { mainUser, friends } = userData;

    document.getElementById("main-user-picture").src = mainUser.picture;
    document.getElementById("main-user-picture").alt = mainUser.firstName;

    document.getElementById("main-user-fullname").textContent =
      `${mainUser.firstName} ${mainUser.lastName}`;

    document.getElementById("main-user-location").textContent =
      `${mainUser.city}, ${mainUser.state}`;
  } catch (error) {
    console.error("Controller Error:", error);
  }
}
