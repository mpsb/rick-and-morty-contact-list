import React from "react";
import styled from "styled-components";

const StyledProfileName = styled.h3`
  margin: 0;
`;

export default function ContactProfileName({ children }) {
  return <StyledProfileName>{children}</StyledProfileName>;
}
