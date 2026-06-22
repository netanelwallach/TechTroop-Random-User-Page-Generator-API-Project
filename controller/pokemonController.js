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

  pokemonName.textContent = PokemonData.name;

  pokemonImage.src = PokemonData.image;
  pokemonImage.alt = PokemonData.name;
}
