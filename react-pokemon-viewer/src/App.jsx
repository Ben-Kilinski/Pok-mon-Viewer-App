import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PokemonList from "./Components/PokemonList";
import "./App.css"; // Adicione estilos, se necessário

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "0");
  const pokemonsPerPage = 20;

  const fetchPokemons = async () => {
    try {
      const offset = page * pokemonsPerPage;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${pokemonsPerPage}`
      );
      const data = await response.json();
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            name: details.name,
            image: details.sprites.front_default,
            types: details.types.map((type) => type.type.name),
          };
        })
      );

      // Adicionar Pokémon personalizados do local storage
      const storedPokemons =
        JSON.parse(localStorage.getItem("customPokemons")) || [];
      setPokemons([...storedPokemons, ...pokemonDetails]);
    } catch (error) {
      console.error("Erro ao buscar Pokémons:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <PokemonList pokemons={pokemons} />
      <div className="pagination">
        <button
          onClick={() => {
            setSearchParams({ page: Math.max(page - 1, 0) });
          }}
          disabled={page === 0}
        >
          Página Anterior
        </button>
        <button
          onClick={() => {
            setSearchParams({ page: page + 1 });
          }}
        >
          Próxima Página
        </button>
      </div>
    </div>
  );
};

export default App;
