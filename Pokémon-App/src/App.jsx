import { useState, useEffect } from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import PokemonCard from "./components/PokemonCard";
import LoadingSpinner from "./components/LoadingSpinner";
import { fetchPokemonList, fetchPokemonDetails } from "./utils/api";

function App() {
  const [pokemonList, setPokemonList] = useState([]); // Lista de Pokémon
  const [loading, setLoading] = useState(true); // Estado de carregamento inicial
  const [loadingMore, setLoadingMore] = useState(false); // Estado para "Load More"
  const [offset, setOffset] = useState(0); // Controle do offset
  const LIMIT = 20; // Quantidade de Pokémon por requisição

  // Função para buscar Pokémon
  async function loadPokemon(nextOffset) {
    if (!loadingMore) setLoading(true); // Mostrar carregamento inicial
    const list = await fetchPokemonList(LIMIT, nextOffset); // Buscar lista de Pokémon
    const details = await Promise.all(
      list.map((pokemon) => fetchPokemonDetails(pokemon.url))
    ); // Buscar detalhes de cada Pokémon
    setPokemonList((prevList) => [...prevList, ...details]); // Adicionar à lista existente
    setLoading(false); // Desativar carregamento inicial
    setLoadingMore(false); // Desativar carregamento do botão
  }

  useEffect(() => {
    loadPokemon(offset); // Buscar Pokémon na montagem do componente
  }, [offset]);

  // Função para carregar mais Pokémon
  const handleLoadMore = () => {
    setLoadingMore(true); // Ativar carregamento do botão
    setOffset((prevOffset) => prevOffset + LIMIT); // Atualizar o offset
  };

  if (loading && pokemonList.length === 0) {
    return (
      <div style={appStyles}>
        <Header />
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div style={appStyles}>
      <Header />
      <Grid>
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
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
    </div>
  );
}

const appStyles = {
  backgroundColor: "#f6f8fc",
  minHeight: "100vh",
  padding: "20px",
};

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
  width: "100%",
  maxWidth: "200px",
};

export default App;
