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

  updateDropdownUI();
}

function savePageSnapshot() {
  const mainUserDiv = document.getElementById("main-user");

  if (!mainUserDiv || !mainUserDiv.dataset.userId) {
    console.log("No user data available to save!");
    return;
  }

  const userId = mainUserDiv.dataset.userId;
  const city = mainUserDiv.dataset.city || "";
  const state = mainUserDiv.dataset.state || "";

  const picture = document.getElementById("main-user-picture").src;
  // Split up fullName back to firstName and lastName and location to city and state
  const fullName = document.getElementById("main-user-fullname");
  const nameParts = fullName.textContent.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  const quote = document.getElementById("quote").textContent;

  const pokemonName = document.getElementById("pokemon-name").textContent;
  const pokemonImage = document.getElementById("pokemon-image");

  const aboutMe = document.getElementById("about-me").textContent;

  const pageSnapshot = {
    id: userId,
    picture: picture,
    firstName: firstName,
    lastName: lastName,
    city: city,
    state: state,
    quote: quote,
    pokemon: {
      name: pokemonName,
      image: pokemonImage.src,
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

  console.log("User page snapshot saved locally!");
  updateDropdownUI();
}

export function loadPageSnapshot() {
  const dropdown = document.getElementById("saved-users-dropdown");
  // Pull your target data directly from your saved selection system
  // For standard loading from the active record:
  const currentCollection =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

  let selectedUserId = dropdown ? dropdown.value : "";

  if (!selectedUserId) {
    const savedKeys = Object.keys(currentCollection);
    if (savedKeys.length === 0) {
      console.log("No profiles saved in storage yet.");
      return;
    }
    selectedUserId = savedKeys[0];
  }

  // const savedUserData = localStorage.getItem("savedUserPage");
  const user = currentCollection[selectedUserId];
  if (!user) return;

  renderMainUser(user);
  renderFriends(user.friends || []);
  renderPokemon(user.pokemon);
  renderQuote(user.quote);
  renderAboutMe(user.aboutMe);
}

function updateDropdownUI() {
  const dropdown = document.getElementById("saved-users-dropdown");
  if (!dropdown) return;

  const currentCollection =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

  dropdown.innerHTML = '<option value="">-- Select Saved User --</option>';

  Object.keys(currentCollection).forEach((userId) => {
    const user = currentCollection[userId];
    const optionNode = document.createElement("option");
    optionNode.value = userId;
    optionNode.textContent = `${user.firstName} ${user.lastName}`;
    dropdown.appendChild(optionNode);
  });
}
