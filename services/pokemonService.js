const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon/";

async function getRandomPokemon() {
  try {
    const id = Math.floor(Math.random() * 1025) + 1;

    const url = `${POKEMON_API_URL}${id}`;

    const pokemonRsponse = await fetch(url);
    if (!pokemonRsponse.ok) {
      throw new Error("failed creating Pokemon");
    }

    const pokemon = await pokemonRsponse.json();
    console.log(pokemon);
  } catch (error) {
    console.error("Failed to fetch Pokemon:", error);
  }
}
