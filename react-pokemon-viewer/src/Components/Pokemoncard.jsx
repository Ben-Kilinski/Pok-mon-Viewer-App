import React, { useState, useEffect } from "react";

function PokemonCard({ pokemon, onClick }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setDetails(data);
    }
    fetchDetails();
  }, [pokemon]);

  if (!details) return <div className="bg-gray-200 p-4 rounded-lg">Carregando...</div>;

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl cursor-pointer"
      onClick={onClick}
    >
      <img
        src={details.sprites.front_default}
        alt={details.name}
        className="w-full h-32 object-contain"
      />
      <h2 className="text-lg font-bold capitalize">{details.name}</h2>
      <p className="text-sm text-gray-600">
        Tipos: {details.types.map((type) => type.type.name).join(", ")}
      </p>
      <p className="text-sm text-gray-600">XP Base: {details.base_experience}</p>
    </div>
  );
}

export default PokemonCard;



