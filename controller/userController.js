import { getUsers } from "../services/userService.js";

export async function initUserController() {
  try {
    const userData = await getUsers();
    if (!userData) return;

    const { mainUser, friends } = userData;

    initMainUser(mainUser);

    initFriends(friends);
  } catch (error) {
    console.error("Controller Error:", error);
  }
}

function initMainUser(mainUser) {
  document.getElementById("main-user-picture").src = mainUser.picture;
  document.getElementById("main-user-picture").alt = mainUser.firstName;

  document.getElementById("main-user-fullname").textContent =
    `${mainUser.firstName} ${mainUser.lastName}`;

  document.getElementById("main-user-location").textContent =
    `${mainUser.city}, ${mainUser.state}`;
}

function initFriends(friends) {
  const friendsContainer = document.getElementById("friends-container");
  friendsContainer.innerHTML = friends
    .map(
      (friend) => `
      <li>
        <img src="${friend.picture}" alt="${friend.firstName} ${friend.lastName}">
        <span>${friend.firstName} ${friend.lastName}</span>
      </li>
    `,
    )
    .join("");
}
