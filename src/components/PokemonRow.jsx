import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import PokemonType from "../PokemonType";

const PokemonRow = ({ pokeman, onSelect }) => {
  return (
    <tr key={pokeman.id}>
      <td>{pokeman.name.english}</td>
      <td>{pokeman.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="success"
          onClick={() => onSelect(pokeman)}
        >
          More Information
        </Button>
      </td>
    </tr>
  );
};

PokemonRow.prototype = {
  pokeman: PropTypes.arrayOf(PokemonType),
};
export default PokemonRow;
