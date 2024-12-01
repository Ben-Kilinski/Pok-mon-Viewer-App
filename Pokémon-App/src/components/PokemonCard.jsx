function PokemonCard() {
    return (
      <div style={cardStyles}>
        <h3>Pikachu</h3>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt="Pikachu"
          style={imageStyles}
        />
        <p>Type: Electric</p>
      </div>
    );
  }
  
  const cardStyles = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#fff",
  };
  
  const imageStyles = {
    width: "100px",
    height: "100px",
  };
  
  export default PokemonCard;
  