import React, { useState } from "react";

function AddPokemon() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    abilities: "",
    baseExperience: "",
    height: "",
    weight: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const customPokemon = JSON.parse(localStorage.getItem("customPokemon")) || [];
    localStorage.setItem("customPokemon", JSON.stringify([...customPokemon, formData]));
    alert("Pokémon adicionado!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-2xl font-bold">Adicionar Pokémon</h1>
      {Object.keys(formData).map((key) => (
        <div key={key} className="my-2">
          <label className="block font-semibold capitalize">{key}</label>
          <input
            type="text"
            name={key}
            value={formData[key]}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded mt-4"
      >
        Adicionar
      </button>
    </form>
  );
}

export default AddPokemon;
