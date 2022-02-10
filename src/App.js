import Compteur from "./Compteur";
import React, { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);

  const increment = () => {
    return setIndex(index + 1);
  };
  const decrement = () => {
    return setIndex(index - 1);
  };
  const reset = () => {
    return setIndex(0);
  };

  return (
    <>
      <div className="compteur">
        <Compteur
          i={i}
          index={index}
          increment={increment}
          decrement={decrement}
          reset={reset}
        />
      </div>
    </>
  );
}

export default App;
