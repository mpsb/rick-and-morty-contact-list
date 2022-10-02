import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: Orbitron;
  font-size: 16px;
  color: #01041f;
  font-weight: 500;
  border: 2px solid var(--primary-color);
  background: var(--primary-color);
  padding: 16px;
  cursor: pointer;
  transition: 0.2s ease;

  :hover {
    border: 2px solid #21cf67;
    background: #21cf67;
  }
`;

export default function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
