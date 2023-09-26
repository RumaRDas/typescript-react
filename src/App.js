import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { legacy_createStore as createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
// import PokemonType from "./PokemonType";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
// import PokemonContext from "./components/PokemonContext";
import { CssBaseline } from "@mui/material";

const pokemonReducer = (
  state = { pokemon: [], filter: "", selectedItem: null },
  { type, payload }
) => {
  switch (type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: payload,
      };
    case "SET_SELECTED_ITEM":
      return {
        ...state,
        selectedItem: payload,
      };
    default:
      return state;
  }
};

const store = createStore(pokemonReducer);
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
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  // const [filter, setFilter] = useState("");
  // const [pokemon, setPokemon] = useState([]);
  // const [selectedItem, setSelectedItem] = useState(null);
  // const [state, dispatch] = useReducer(pokemonReducer, {
  //   pokemon: [],
  //   filter: "",
  //   selectedItem: null,
  // });

  useEffect(() => {
    fetch("http://localhost:3000/typescript-react/pokemon.json")
      .then((res) => res.json())
      .then((resData) => dispatch({ type: "SET_POKEMON", payload: resData }));
  }, []);

  if (!pokemon) {
    return <div>Loading Data....</div>;
  }

  return (
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
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
