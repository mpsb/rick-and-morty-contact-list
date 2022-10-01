import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: var(--primary-color);
  font-weight: 500;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "32")}px;
  letter-spacing: 0.025em;
  text-decoration: none;
`;

export default function RouterLink({ to, children, fontSize, onClick }) {
  return (
    <StyledLink to={to} fontSize={fontSize} onClick={onClick}>
      {children}
    </StyledLink>
  );
}
