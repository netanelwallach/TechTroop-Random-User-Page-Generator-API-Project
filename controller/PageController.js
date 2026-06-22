import { renderMainUser, renderFriends } from "./userController.js";
import { renderPokemon } from "./pokemonController.js";
import { renderQuote } from "./quoteController.js";
import { renderAboutMe } from "./aboutMeController.js";

const LOCAL_STORAGE_KEY = "savedUserPagesCollection";

export function initPageStateController() {
  const saveBtn = document.getElementById("save-user");
  const loadBtn = document.getElementById("load-user");

  if (saveBtn) saveBtn.addEventListener("click", savePageSnapshot);
  if (loadBtn) loadBtn.addEventListener("click", loadPageSnapshot);
}

function savePageSnapshot() {
  const mainUserDiv = document.getElementById("main-user");
  const pokemonImage = document.getElementById("pokemon-image");

  if (!mainUserDiv || !mainUserDiv.dataset.userId) {
    console.log("No user data available to save!");
    return;
  }

  const userId = mainUserDiv.dataset.userId;

  // Split up fullName back to firstName and lastName and location to city and state
  const fullName = document.getElementById("main-user-fullname");
  const nameParts = fullName.textContent.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  const location = document.getElementById("main-user-location");
  const locationParts = location.textContent.split(", ");
  const city = locationParts[0];
  const state = locationParts[1];

  const quote = document.getElementById("quote").textContent;

  const pokemonName = document.getElementById("pokemon-name").textContent;

  const aboutMe = document.getElementById("about-me").textContent;

  const pageSnapshot = {
    id: mainUserDiv.dataset.userId,
    picture: document.getElementById("main-user-picture").src,
    firstName: firstName,
    lastName: lastName,
    city: city,
    state: state,
    quote: quote,
    pokemon: {
      name: pokemonName,
      image: pokemonImage ? pokemonImage.src : "",
    },
    aboutMe: aboutMe,
    friends: Array.from(document.querySelectorAll("#friends-container li")).map(
      // get the elements of frindes to save
      (li) => ({
        picture: li.dataset.picture,
        firstName: li.dataset.firstName,
        lastName: li.dataset.lastName,
      }),
    ),
  };

  const currentCollection =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  currentCollection[userId] = pageSnapshot;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentCollection));

  localStorage.setItem("savedUserPage", JSON.stringify(pageSnapshot));
  console.log("User page snapshot saved locally!");
}

function loadPageSnapshot() {
  const savedUserData = localStorage.getItem("savedUserPage");

  if (!savedUserData) {
    console.log("No saved user page found in local storage!");
    return;
  }

  const snapshot = JSON.parse(savedUserData);

  renderMainUser(snapshot.mainUser);
  renderFriends(snapshot.friends);
  renderPokemon(snapshot.pokemon);
  renderQuote(snapshot.quote);
  renderAboutMe(snapshot.aboutMe);

  console.log("User page snapshot loaded successfully!");
}
