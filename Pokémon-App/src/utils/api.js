const API_BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemonList(limit = 20, offset = 0) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
    );
    if (!response.ok) throw new Error("Failed to fetch Pokémon list.");
    const data = await response.json();
    return data.results; // Array com { name, url }
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchPokemonDetails(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch Pokémon details.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
