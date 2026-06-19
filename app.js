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
