import React, { useState } from "react";
import { Button } from 'react-bootstrap';

export const Teste = () => {
  const [state, setstate] = useState(0)

  return (
    <div>
      <h1 onClick={() => setstate(state + 1)}>Teste {state}</h1>
      <Button variant="primary">Primary</Button>
    </div>
  );
};