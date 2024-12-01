function LoadingSpinner() {
  return (
    <div style={spinnerStyles}>
      <div style={circleStyles}></div>
    </div>
  );
}

const spinnerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const circleStyles = {
  width: "50px",
  height: "50px",
  border: "5px solid #ccc",
  borderTop: "5px solid #2a75bb",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

export default LoadingSpinner;
