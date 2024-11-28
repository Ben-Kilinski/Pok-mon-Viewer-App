const AddPokemonPage = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
  
    const handleAddPokemon = () => {
      const newPokemon = {
        name,
        types: [type],
        image,
      };
      const storedPokemons =
        JSON.parse(localStorage.getItem("customPokemons")) || [];
      storedPokemons.push(newPokemon);
      localStorage.setItem("customPokemons", JSON.stringify(storedPokemons));
      alert(`${name} foi adicionado!`);
    };
  
    return (
      <div>
        <h2>Adicionar Pokémon</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Nome:
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome do Pokémon"
            />
          </label>
          <br />
          <label>
            Tipo:
            <input
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Tipo do Pokémon"
            />
          </label>
          <br />
          <label>
            URL da Imagem:
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="URL da imagem"
            />
          </label>
          <br />
          <button onClick={handleAddPokemon}>Salvar Pokémon</button>
        </form>
      </div>
    );
  };
  