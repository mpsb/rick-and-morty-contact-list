import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 2px solid #8bcf21;
  padding: 12px;
  background-color: transparent;
  font-family: Orbitron;
  color: var(--primary-color);
  font-size: 16px;
  transition: 0.5s ease;

  ::placeholder {
    color: rgba(139, 207, 33, 0.7);
  }

  :focus {
    outline: none;
    border: 2px solid #21cf67;
  }

  :hover {
    border: 2px solid #21cf67;
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
