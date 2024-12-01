function Header() {
  return (
    <header style={headerStyles}>
      <h1>Pokémon Viewer</h1>
      <p style={subTitleStyles}>Browse and explore your favorite Pokémon!</p>
    </header>
  );
}

const headerStyles = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#ffcb05",
  color: "#2a75bb",
};

const subTitleStyles = {
  fontSize: "1rem",
  color: "#555",
};

export default Header;
