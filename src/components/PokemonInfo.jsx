import React from "react";
import PokemonType from "../PokemonType";
import "../App.css";

const PokemonInfo = ({ name: { english }, base }) => {
  return (
    <div>
      <h1>{english}</h1>
      <table>
        <tbody>
          {Object.keys(base).map(
            (
              key,
              i // For base all keys
            ) => (
              <tr key={key}>
                <td>{key}</td>
                {/* Getting value according to keys */}
                <td>{base[key]}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

PokemonInfo.prototype = PokemonInfo;
export default PokemonInfo;
