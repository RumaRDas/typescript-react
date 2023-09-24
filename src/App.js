import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
// import pokemon from "./pokemon.json";
import "./App.css";
import Button from "@mui/material/Button";

const PokemonRow = ({ pokeman, onSelect }) => {
  return (
    <tr>
      <td>{pokeman.name.english}</td>
      <td>{pokeman.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="success"
          onClick={() => onSelect(pokeman)}
        >
          Select!
        </Button>
      </td>
    </tr>
  );
};

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({ english: PropTypes.string }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
  onSelect: PropTypes.func,
};
const PokemonInfo = ({ name, base }) => {
  return (
    <div>
      <h1>{name.english}</h1>
      <table>
        {Object.keys(base).map((
          key,
          i // For base all keys
        ) => (
          <tbody key={i}>
            <tr key={key}>
              <td>{key}</td>
              {/* Getting value according to keys */}
              <td>{base[key]}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
PokemonInfo.propTypes = {
  name: PropTypes.shape({ english: PropTypes.string.isRequired }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
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

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
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
          <Input value={filter} onChange={(e) => setFilter(e.target.value)} />
          <table width="100%">
            <thead>
              <tr>
                <th> Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemon
                // {      serching the pokemon}
                .filter((d) =>
                  d.name.english.toLowerCase().includes(filter.toLowerCase())
                )
                // Getting 20 value from all array
                .slice(0, 20)
                .map((pokeman) => {
                  return (
                    <PokemonRow
                      pokeman={pokeman}
                      key={pokeman.id}
                      onSelect={(pokeman) => setSelectedItem(pokeman)}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </TwoColumnLayout>
    </Container>
  );
}

export default App;
