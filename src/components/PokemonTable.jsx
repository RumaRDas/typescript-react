import React, { useContext } from "react";
import PropTypes from "prop-types";
import PokemonRow from "./PokemonRow";
import PokemonContext from "./PokemonContext";

const PokemonTable = () => {
  const { pokemon, filter, setSelectedItem } = useContext(PokemonContext);
  return (
    <table width="100%">
      <thead>
        <tr>
          <th> Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter((d) =>
            d.name.english.toLowerCase().includes(filter.toLowerCase())
          )
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
  );
};

export default PokemonTable;
