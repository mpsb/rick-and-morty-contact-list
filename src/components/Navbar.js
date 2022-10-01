import React from "react";
import styled from "styled-components";
import Box from "./Box";
import RouterLink from "./RouterLink";
import Title from "./Title";

const StyledNavbar = styled(Box)`
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 15%;

  @media (max-width: 768px) {
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
