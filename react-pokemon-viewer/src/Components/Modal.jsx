import React, { useEffect, useState } from "react";

function PokemonModal({ pokemon, onClose }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setDetails(data);
    }
    fetchDetails();
  }, [pokemon]);

  if (!details) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg">
        <button
          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
          onClick={onClose}
        >
          Fechar
        </button>
        <img
          src={details.sprites.front_default}
          alt={details.name}
          className="w-full h-32 object-contain"
        />
        <h2 className="text-2xl font-bold capitalize">{details.name}</h2>
        <p className="text-sm text-gray-600">
          Tipos: {details.types.map((type) => type.type.name).join(", ")}
        </p>
        <p className="text-sm text-gray-600">Altura: {details.height}</p>
        <p className="text-sm text-gray-600">Peso: {details.weight}</p>
        <p className="text-sm text-gray-600">Habilidades:</p>
        <ul>
          {details.abilities.map((ability, index) => (
            <li key={index} className="text-gray-600">
              {ability.ability.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonModal;


