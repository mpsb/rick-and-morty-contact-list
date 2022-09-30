import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-family: Schwifty;
  font-size: 40px;
  text-align: center;
  color: #83d2e4;
  text-shadow: -1px -1px 0 #8bcf21, 1px -1px 0 #8bcf21, -1px 1px 0 #8bcf21,
    1px 1px 0 #8bcf21;
`;

export default function Title(props) {
  return <StyledTitle>{props.children}</StyledTitle>;
}
