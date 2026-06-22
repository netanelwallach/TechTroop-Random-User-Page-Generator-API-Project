import { initUserController } from "./controller/userController.js";
import { initAboutMeController } from "./controller/aboutMeController.js";
import { initPokemonController } from "./controller/pokemonController.js";
import { initQuoteController } from "./controller/quoteController.js";
import { initPageStateController } from "./controller/PageController.js";

document.addEventListener("DOMContentLoaded", () => {
  renderPage();
  initPageStateController();
});

const generate = document.getElementById("generate-user");
generate.addEventListener("click", () => {
  renderPage();
});

function renderPage() {
  initUserController();
  initAboutMeController();
  initPokemonController();
  initQuoteController();
}
