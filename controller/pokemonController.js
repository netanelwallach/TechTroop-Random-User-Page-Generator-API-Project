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

function initPokemon(PokemonData) {
  const pokemonName = document.getElementById("pokemon-name");
  const pokemonImage = document.getElementById("pokemon-image");

  const properCaseName =
    PokemonData.name.charAt(0).toUpperCase() + PokemonData.name.slice(1);
  pokemonName.textContent = properCaseName;

  pokemonImage.src = PokemonData.image;
  pokemonImage.alt = PokemonData.name;
}
