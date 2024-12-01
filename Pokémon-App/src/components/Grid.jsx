function Grid({ children }) {
    return <div style={gridStyles}>{children}</div>;
  }
  
  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
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
  
  
  export default Grid;

  // function Grid({ children }) {
  //   return <div style={gridStyles}>{children}</div>;
  // }
  
  // const gridStyles = {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  //   gap: "20px",
  //   padding: "20px",
  // };
  
  // export default Grid;
  
  