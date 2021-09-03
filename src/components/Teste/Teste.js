import React, { useState } from "react";

export const Teste = () => {
  const [state, setstate] = useState(0)

  return (
    <h1 onClick={() => setstate(state + 1)}>Teste {state}</h1>
  );
};