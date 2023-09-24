import React from "react";
import PropTypes from "prop-types";
import PokemonRow from "./PokemonRow";

const PokemonTable = ({ pokemon, filter, setSelectedItem }) => {
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
