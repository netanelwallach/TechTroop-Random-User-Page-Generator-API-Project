import { initUserController } from "./controller/userController.js";
import { initAboutMeController } from "./controller/aboutMeController.js";

document.addEventListener("DOMContentLoaded", () => {
  initUserController();
  initAboutMeController();
});
