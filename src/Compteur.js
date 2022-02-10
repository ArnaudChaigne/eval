import React from "react";

const Compteur = ({ index, increment, decrement, reset }) => {
  return (
    <>
      <h1>Compteur: {index}</h1>
      <button onClick={() => increment(index)}>increment</button>
      <button onClick={() => decrement(index)}>decrement</button>
      <button onClick={() => reset(index)}>reset</button>
    </>
  );
};

export default Compteur;
