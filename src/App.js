import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
const App = () =>{
  const [pokeApiData, setPokeApiData] = useState([]);
  const numPoke = 807;
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit="+numPoke)
      .then((response) => {
        console.log(response.data.results);
        setPokeApiData(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>Axios Pokemon API</h1>
      <ul>
        {pokeApiData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

