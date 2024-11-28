import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemonList, fetchPokemonDetails } from "../services/pokemonApi";

export const fetchPokemons = createAsyncThunk("pokemon/fetchPokemons", async () => {
  return await fetchPokemonList();
});

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    list: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default pokemonSlice.reducer;

