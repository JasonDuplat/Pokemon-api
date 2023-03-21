import React, { useState } from 'react';
import axios from 'axios';

function Pokemon() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const getPokemon = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setName(response.data.name);
    setType(response.data.types[0].type.name);
  };

  return (
    <div>
      <h1>Find a Pokemon</h1>
      <input
        type="text"
        placeholder="Enter Pokemon ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={getPokemon}>Find</button>
      {name && <p>Name: {name}</p>}
      {type && <p>Type: {type}</p>}
    </div>
  );
}

export default Pokemon;
