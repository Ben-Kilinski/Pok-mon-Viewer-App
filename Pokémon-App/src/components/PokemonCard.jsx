import React from "react";
import "../index.css";

function PokemonCard({ pokemon, onClick }) {
  return (
    <div className="pokemon-card" onClick={() => onClick(pokemon)}>
      <h3>{pokemon.name.toUpperCase()}</h3>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p><strong>Type:</strong> {pokemon.types.map((t) => t.type.name).join(", ")}</p>
      <p><strong>Weight:</strong> {pokemon.weight}</p>
      <p><strong>Height:</strong> {pokemon.height}</p>
    </div>
  );
}

export default PokemonCard;
