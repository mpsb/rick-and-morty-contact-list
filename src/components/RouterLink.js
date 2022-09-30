import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: var(--primary-color);
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.025em;
  text-decoration: none;
`;

export default function RouterLink({ to, text }) {
  return <StyledLink to={to}>{text}</StyledLink>;
}
