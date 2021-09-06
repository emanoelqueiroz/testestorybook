import React, { useState } from "react";
import { Button } from 'react-bootstrap';

export const Teste = () => {
  const [state, setstate] = useState(0)
  const testeTypeScript:string = 'TYPESCRIPT';

  return (
    <>
      <span onClick={() => setstate(state + 1)}>Teste {state}</span>
      <Button variant="primary">{testeTypeScript}</Button>
    </>
  );
};