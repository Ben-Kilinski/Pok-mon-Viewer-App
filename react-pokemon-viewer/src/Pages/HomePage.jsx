import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../slices/pokemonSlice";
import PokemonCard from "../components/PokemonCard";

function Home() {
  const dispatch = useDispatch();
  const { pokemonList, loading, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  if (loading) return <div className="text-center">Carregando...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-6">Pokémon Viewer</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default Home;


