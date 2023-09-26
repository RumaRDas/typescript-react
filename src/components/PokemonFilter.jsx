import React from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;
const PokemonFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  return (
    <Input
      value={filter}
      onChange={(e) =>
        dispatch({ type: "SET_FILTER", payload: e.target.value })
      }
    />
  );
};

export default PokemonFilter;
