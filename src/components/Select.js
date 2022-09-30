import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  cursor: pointer;
  border: 2px solid #8bcf21;
  padding: 12px;
  background-color: transparent;
  font-family: Orbitron;
  color: var(--primary-color);
  font-size: 16px;
  transition: 0.5s ease;

  :focus {
    outline: none;
    border: 2px solid #21cf67;
  }

  :hover {
    border: 2px solid #21cf67;
  }
`;

const StyledOption = styled.option`
  background-color: #01041f;
  padding: 8px;
  border: 2px solid #8bcf21;
`;

export default function Select({ options, handleChange, value }) {
  return (
    <StyledSelect value={value} onChange={handleChange}>
      {options.map((option) => (
        <StyledOption value={option.value}>{option.text}</StyledOption>
      ))}
    </StyledSelect>
  );
}
