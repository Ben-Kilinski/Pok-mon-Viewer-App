import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonList = async (limit = 20, offset = 0) => {
  const response = await axios.get(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
  return response.data.results;
};

export const fetchPokemonDetails = async (idOrName) => {
  const response = await axios.get(`${API_URL}/pokemon/${idOrName}`);
  return response.data;
};

