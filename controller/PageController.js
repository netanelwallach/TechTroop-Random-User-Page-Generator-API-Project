import { initFriends } from "./userController.js";

export function initPageStateController() {
  const saveBtn = document.getElementById("save-user");
  const loadBtn = document.getElementById("load-user");

  if (saveBtn) saveBtn.addEventListener("click", savePageSnapshot);
}

function savePageSnapshot() {
  const mainUserDiv = document.getElementById("main-user");
  const pokemonImg = document.getElementById("pokemon-image");

  if (!mainUserDiv || !mainUserDiv.dataset.userId) {
    console.log("No user data available to save!");
    return;
  }

  const pageSnapshot = {
    userId: mainUserDiv.dataset.userId,
    picture: document.getElementById("main-user-picture").src,
    fullName: document.getElementById("main-user-fullname").textContent,
    location: document.getElementById("main-user-location").textContent,
    quote: document.getElementById("quote").textContent,
    pokemon: {
      name: document.getElementById("pokemon-name").textContent,
      image: pokemonImg ? pokemonImg.src : "",
    },
    aboutMe: document.getElementById("about-me").textContent,
    friends: Array.from(document.querySelectorAll("#friends-container li")).map(
      // get the elements of frindes to save
      (li) => ({
        picture: li.dataset.picture,
        firstName: li.dataset.firstName,
        lastName: li.dataset.lastName,
      }),
    ),
  };

  localStorage.setItem("savedUserPage", JSON.stringify(pageSnapshot));
  console.log("User page snapshot saved locally!");
  console.log("User page snapshot saved locally!");
}
