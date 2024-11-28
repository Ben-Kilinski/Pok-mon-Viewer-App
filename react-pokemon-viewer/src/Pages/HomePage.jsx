import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../redux/pokemonSlice";
import PokemonCard from "../Components/Pokemoncard";
import react=redux from react;

const HomePage = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.pokemon);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPokemons());
    }
  }, [dispatch, status]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error loading Pokémon data.</div>;

  return (
    <div className="pokemon-grid">
      {list.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default HomePage;
