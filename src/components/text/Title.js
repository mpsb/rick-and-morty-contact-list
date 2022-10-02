import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-family: Schwifty;
  font-size: 40px;
  text-align: center;
  color: var(--title-blue-color);
  text-shadow: -0.5px -0.5px 0 var(--primary-color),
    0.5px -0.5px 0 var(--primary-color), -0.5px 0.5px 0 var(--primary-color),
    0.5px 0.5px 0 var(--primary-color);
`;

export default function Title(props) {
  return <StyledTitle>{props.children}</StyledTitle>;
}
