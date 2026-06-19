import { getRandomPokemon } from "../services/pokemonService.js";

export async function initPokemonController() {
  try {
    const PokemonData = await getRandomPokemon();
    if (!PokemonData) return;

    initPokemon(PokemonData);
  } catch (error) {
    console.error("Controller Error:", error);
  }
}

function initAboutMe(PokemonData) {
  document.getElementById("polemon-name").textContent = PokemonData.name;

  document.getElementById("pokemon-image").src = PokemonData.image;
  document.getElementById("pokemon-image").alt = PokemonData.name;
}
