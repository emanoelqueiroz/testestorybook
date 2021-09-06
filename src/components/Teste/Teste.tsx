import React, { useState } from "react";
import { Button, DropdownButton, OverlayTrigger, Tooltip } from 'react-bootstrap';

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Simple tooltip
  </Tooltip>
);


export const Teste = () => {
  const [state, setstate] = useState(0)
  let testeTypeScript: string = 'TYPESCRIPT'

  testeTypeScript = 'IHUUUUUUULLL'

  return (
    <>
      <span onClick={() => setstate(state + 1)}>Teste {state}</span>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="primary">{testeTypeScript}</Button>
      </OverlayTrigger>
      <DropdownButton title="batata"></DropdownButton>
    </>
  );
};