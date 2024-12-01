function Grid({ children }) {
    return <div style={gridStyles}>{children}</div>;
  }
  
  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  };
  
  export default Grid;
  