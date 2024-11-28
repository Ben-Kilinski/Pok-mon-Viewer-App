import React, { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import PokemonModal from "./Components/Modal";
import "./index.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await response.json();
        setPokemonList(data.results);
        setLoading(false);
      } catch (err) {
        setError("Erro ao carregar Pokémon");
        setLoading(false);
      }
    }
    fetchPokemon();
  }, []);

  if (loading) return <div className="text-center">Carregando...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-6">Pokémon Viewer</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard
            key={index}
            pokemon={pokemon}
            onClick={() => setSelectedPokemon(pokemon)}
          />
        ))}
      </div>
      {selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
}

export default App;
