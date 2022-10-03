import React from "react";
import styled from "styled-components";
import { Box } from "./Box";
import RouterLink from "../interactive/RouterLink";
import Title from "../text/Title";
import { BREAKPOINTS } from "../../constants";

const StyledNavbar = styled(Box)`
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    width: auto;
    margin-bottom: 16px;
  }
`;

export default function Navbar({ links }) {
  return (
    <StyledNavbar>
      <Title>Rick and Morty</Title>
      {links.map((link, index) => {
        return (
          <RouterLink to={link.url} key={`${link.url}-${index}`}>
            {link.name}
          </RouterLink>
        );
      })}
    </StyledNavbar>
  );
}
