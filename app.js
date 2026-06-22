import { initUserController } from "./controller/userController.js";
import { initAboutMeController } from "./controller/aboutMeController.js";
import { initPokemonController } from "./controller/pokemonController.js";
import { initQuoteController } from "./controller/quoteController.js";

document.addEventListener("DOMContentLoaded", () => {
  initUserController();
  initAboutMeController();
  initPokemonController();
  initQuoteController();
});

const generate = document.getElementById("generate-user");
generate.addEventListener("click", () => {
  initUserController();
  initAboutMeController();
  initPokemonController();
  initQuoteController();
});

// const saveUser = document.getElementById("save-user");

// saveUser.addEventListener("click", () => {
//   const userSnapshot = {
//     userId: document.getElementById("userId").innerText,
//     quote: document.getElementById("quoteSection").innerText,
//     pokemon: document.getElementById("pokemonName").innerText,
//     meatText: document.getElementById("meatTextSection").innerText,
//     friends: [],
//   };

//   localStorage.setItem("savedUserPage", JSON.stringify(userSnapshot));
//   alert("User page snapshot saved locally!");
// });
