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
  const mainUserDiv = document.getElementById("main-user"); // element for id and also later for design
  const mainUserPicture = document.getElementById("main-user-picture");
  const mainUserFullname = document.getElementById("main-user-fullname");
  const mainUserLocation = document.getElementById("main-user-location");

  mainUserDiv.dataset.userId = mainUser.id;

  mainUserPicture.src = mainUser.picture;
  mainUserPicture.alt = mainUser.firstName;

  mainUserFullname.textContent = `${mainUser.firstName} ${mainUser.lastName}`;

  mainUserLocation.textContent = `${mainUser.city}, ${mainUser.state}`;
}

export function initFriends(friends) {
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
