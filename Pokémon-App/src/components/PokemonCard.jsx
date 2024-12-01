import { useState } from "react";
import "../index.css";

function PokemonCard({ pokemon }) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`pokemon-card ${selected ? "selected" : ""}`}
      onClick={() => setSelected(!selected)}
    >
      <h3>{pokemon.name.toUpperCase()}</h3>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p><strong>Type:</strong> {pokemon.types.map((t) => t.type.name).join(", ")}</p>
      <p><strong>Weight:</strong> {pokemon.weight}</p>
      <p><strong>Height:</strong> {pokemon.height}</p>
      <div className="pokemon-card-stats">
        <h4>Stats:</h4>
        {pokemon.stats.map((stat) => (
          <p key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </p>
        ))}
      </div>
      <div className="pokemon-card-abilities">
        <h4>Abilities:</h4>
        {pokemon.abilities.map((ability) => (
          <p key={ability.ability.name}>{ability.ability.name}</p>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
