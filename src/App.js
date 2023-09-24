import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import "./App.css";
import PokemonType from "./PokemonType";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

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
  const [filter, setFilter] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/typescript-react/pokemon.json")
      .then((res) => res.json())
      .then((resData) => setPokemon(resData));
  }, []);

  return (
    <Container>
      <Title>Pokemon Search</Title>

      <TwoColumnLayout>
        <div>
          <PokemonFilter filter={filter} setFilter={setFilter} />
          <PokemonTable
            filter={filter}
            setSelectedItem={setSelectedItem}
            pokemon={pokemon}
          />
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </TwoColumnLayout>
    </Container>
  );
}

export default App;
