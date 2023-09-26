import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from "prop-types";
import PokemonRow from "./PokemonRow";
// import PokemonContext from "./PokemonContext";

const PokemonTable = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  const filter = useSelector((state) => state.filter);
  // const {
  //   state: { pokemon, filter },
  //   dispatch,
  // } = useContext(PokemonContext);
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
                onSelect={(pokeman) =>
                  dispatch({ type: "SET_SELECTED_ITEM", payload: pokeman })
                }
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default PokemonTable;
