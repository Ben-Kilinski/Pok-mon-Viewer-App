import { useState, useEffect } from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import PokemonCard from "./components/PokemonCard";
import LoadingSpinner from "./components/LoadingSpinner";
import PokemonModal from "./components/Modal";
import { fetchPokemonList, fetchPokemonDetails } from "./utils/api";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [offset, setOffset] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const LIMIT = 20;

  async function loadPokemon(nextOffset) {
    if (!loadingMore) setLoading(true);
    const list = await fetchPokemonList(LIMIT, nextOffset);
    const details = await Promise.all(
      list.map((pokemon) => fetchPokemonDetails(pokemon.url))
    );
    setPokemonList((prevList) => [...prevList, ...details]);
    setLoading(false);
    setLoadingMore(false);
  }

  useEffect(() => {
    loadPokemon(offset);
  }, [offset]);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setOffset((prevOffset) => prevOffset + LIMIT);
  };

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedPokemon(null);
  };

  if (loading && pokemonList.length === 0) {
    return (
      <div>
        <Header />
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Grid>
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={handleCardClick}
          />
        ))}
      </Grid>
      <div style={buttonContainerStyles}>
        <button
          style={buttonStyles}
          onClick={handleLoadMore}
          disabled={loadingMore}
        >
          {loadingMore ? "Loading..." : "Load More"}
        </button>
      </div>
      <PokemonModal
        open={isModalOpen}
        handleClose={handleModalClose}
        pokemon={selectedPokemon}
      />
    </div>
  );
}

const buttonContainerStyles = {
  textAlign: "center",
  marginTop: "20px",
};

const buttonStyles = {
  backgroundColor: "#2a75bb",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "16px",
};

export default App;
