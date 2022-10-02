import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h2`
  font-size: 40px;
  font-weight: 500;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 32px;
  }
`;

export default function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}
