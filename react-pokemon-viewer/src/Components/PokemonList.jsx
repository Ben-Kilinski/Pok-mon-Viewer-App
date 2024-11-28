import React, { useEffect, useState } from "react";
import PokemonCard from "./Pokemoncard";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]); // Armazena os Pokémon

  // Função para buscar os Pokémon
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await response.json();
        setPokemons(data.results); // Define os Pokémon retornados
      } catch (error) {
        console.error("Erro ao buscar Pokémon:", error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div>
      {pokemons.map((pokemon, index) => (
        <div key={index}>
          <h2>{pokemon.name}</h2>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
            alt={pokemon.name}
          />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
