import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  cursor: pointer;
  border: 2px solid var(--primary-color);
  padding: 12px;
  background-color: transparent;
  font-family: Orbitron;
  color: var(--primary-color);
  font-size: 16px;
  transition: 0.5s ease;
  margin-bottom: 16px;

  :focus {
    outline: none;
    border: 2px solid var(--secondary-color);
  }

  :hover {
    border: 2px solid var(--secondary-color);
  }
`;

const StyledOption = styled.option`
  background-color: var(--background-color);
  padding: 8px;
  border: 2px solid var(--primary-color);
`;

export default function Select({ options, handleChange, value }) {
  return (
    <StyledSelect value={value} onChange={handleChange}>
      {options.map((option, index) => (
        <StyledOption value={option.value} key={`${option.value}-${index}`}>
          {option.text}
        </StyledOption>
      ))}
    </StyledSelect>
  );
}
