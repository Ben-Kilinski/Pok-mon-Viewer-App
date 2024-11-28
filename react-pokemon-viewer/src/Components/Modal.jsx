import React from "react";
import { Modal, Box, Typography } from "@mui/material";

const PokemonModal = ({ open, handleClose, pokemon }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal-box">
        <Typography variant="h6">{pokemon.name}</Typography>
        <img src={pokemon.image} alt={pokemon.name} />
        {/* Adicione mais detalhes aqui */}
      </Box>
    </Modal>
  );
};

export default PokemonModal;
