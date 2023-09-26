import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import PokemonType from "../PokemonType";
import "../App.css";
// import PokemonContext from "./PokemonContext";

const PokemonInfo = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.selectedItem);

  // const {
  //   state: { selectedItem },
  // } = useContext(PokemonContext);
  return selectedItem ? (
    <div>
      <h1>{selectedItem.name.english}</h1>
      <table>
        <tbody>
          {Object.keys(selectedItem.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedItem.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

PokemonInfo.prototype = PokemonInfo;
export default PokemonInfo;
