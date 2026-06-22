import { initFriends } from "./userController.js";

export function initPageStateController() {
  const saveBtn = document.getElementById("save-user");
  const loadBtn = document.getElementById("load-user");

  if (saveBtn) saveBtn.addEventListener("click", savePageSnapshot);
  if (loadBtn) loadBtn.addEventListener("click", loadPageSnapshot);
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

function loadPageSnapshot() {
  const savedUserData = localStorage.getItem("savedUserPage");

  if (!savedUserData) {
    console.log("No saved user page found in local storage!");
    return;
  }

  const snapshot = JSON.parse(savedUserData);

  const mainUserDiv = document.getElementById("main-user");
  mainUserDiv.dataset.userId = snapshot.userId;

  const mainUserPicture = document.getElementById("main-user-picture");
  const mainUserFullname = document.getElementById("main-user-fullname");
  const mainUserLocation = document.getElementById("main-user-location");
  mainUserPicture.src = snapshot.picture;
  mainUserFullname.textContent = snapshot.fullName;
  mainUserLocation.textContent = snapshot.location;

  const quote = document.getElementById("quote");
  quote.textContent = snapshot.quote;

  const pokemonName = document.getElementById("pokemon-name");
  pokemonName.textContent = snapshot.pokemon.name;

  const pokemonImage = document.getElementById("pokemon-image");
  if (pokemonImage) {
    pokemonImage.src = snapshot.pokemon.image;
    pokemonImage.alt = snapshot.pokemon.name;
  }

  const aboutMe = document.getElementById("about-me");
  aboutMe.textContent = snapshot.aboutMe;

  initFriends(snapshot.friends);

  console.log("User page snapshot loaded successfully!");
  console.log("User page snapshot loaded successfully!");
}
