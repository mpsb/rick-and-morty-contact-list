import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 2px solid var(--primary-color);
  padding: 12px;
  background-color: transparent;
  font-family: Orbitron;
  color: var(--primary-color);
  font-size: 16px;
  transition: 0.5s ease;
  margin-bottom: 16px;

  ::placeholder {
    color: var(--placeholder-color);
  }

  :focus {
    outline: none;
    border: 2px solid var(--secondary-color);
  }

  :hover {
    border: 2px solid var(--secondary-color);
  }
`;

export default function Input({ placeholder, handleChange, value }) {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
}
