import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

function PokemonModal({ open, handleClose, pokemon }) {
  if (!pokemon) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyles}>
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          {pokemon.name.toUpperCase()}
        </Typography>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          style={imageStyles}
        />
        <Typography variant="h6">Type(s):</Typography>
        <Typography>
          {pokemon.types.map((type) => type.type.name).join(", ")}
        </Typography>
        <Typography variant="h6" sx={{ marginTop: "10px" }}>
          Stats:
        </Typography>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
        <Typography variant="h6">Abilities:</Typography>
        <ul>
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
        <Typography variant="h6">Moves (First 10):</Typography>
        <ul>
          {pokemon.moves.slice(0, 10).map((move) => (
            <li key={move.move.name}>{move.move.name}</li>
          ))}
        </ul>
        <Button
          variant="contained"
          onClick={handleClose}
          sx={{ marginTop: "20px" }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}

const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  width: "90%",
  maxWidth: "500px",
  borderRadius: "10px",
  overflowY: "auto",
  maxHeight: "90vh",
};

const imageStyles = {
  width: "150px",
  height: "150px",
  display: "block",
  margin: "0 auto 20px",
};

export default PokemonModal;
