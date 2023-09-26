import React, { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import "./App.css";
import PokemonType from "./PokemonType";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./components/PokemonContext";
import { CssBaseline } from "@mui/material";

const pokemonReducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "SET_SELECTED_ITEM":
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      throw new Error("No action");
  }
};

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function App() {
  // const [filter, setFilter] = useState("");
  // const [pokemon, setPokemon] = useState([]);
  // const [selectedItem, setSelectedItem] = useState(null);
  const [state, dispatch] = useReducer(pokemonReducer, {
    pokemon: [],
    filter: "",
    selectedItem: null,
  });

  useEffect(() => {
    fetch("http://localhost:3000/typescript-react/pokemon.json")
      .then((res) => res.json())
      .then((resData) => dispatch({ type: "SET_POKEMON", payload: resData }));
  }, []);

  if (!state.pokemon) {
    return <div>Loading Data....</div>;
  }

  return (
    <PokemonContext.Provider
      value={{
        // filter,
        // setFilter,
        // pokemon,
        // setPokemon,
        // selectedItem,
        // setSelectedItem,
        state,
        dispatch,
      }}
    >
      <Container>
        <CssBaseline />
        <Title>Pokemon Search</Title>

        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
      </Container>
    </PokemonContext.Provider>
  );
}

export default App;
