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

    const pokemonNameImage = getNameImage(pokemon);
    console.log(pokemonNameImage);

    return pokemonNameImage;
  } catch (error) {
    console.error("Failed to fetch Pokemon:", error);
  }
}

function getNameImage(pokemon) {
  const name = pokemon.name;

  // consult AI to get the best image from all that exist
  const officialArt = pokemon.sprites.other["official-artwork"].front_default;
  const dreamWorldArt = pokemon.sprites.other.dream_world.front_default;
  const defaultSprite = pokemon.sprites.front_default;

  const image = officialArt || dreamWorldArt || defaultSprite;
  return { name, image };
}
