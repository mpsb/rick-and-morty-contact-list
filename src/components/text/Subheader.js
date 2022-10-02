import React from "react";
import styled from "styled-components";

const StyledSubheader = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

export default function Subheader({ children }) {
  return <StyledSubheader>{children}</StyledSubheader>;
}
