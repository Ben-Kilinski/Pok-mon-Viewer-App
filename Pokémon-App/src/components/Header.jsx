function Header() {
    return (
      <header style={headerStyles}>
        <h1>React Pokémon Viewer</h1>
      </header>
    );
  }
  
  const headerStyles = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#ffcb05",
    color: "#2a75bb",
    fontFamily: "Arial, sans-serif",
  };
  
  export default Header;
  