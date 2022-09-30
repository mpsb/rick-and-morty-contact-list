import React from "react";
import styled from "styled-components";

export default function Box({ className, flexDirection, children }) {
  const StyledBox = styled.div`
    border: 4px solid #8bcf21;
    display: flex;
    flex-direction: ${flexDirection ? flexDirection : "column"};
    padding: 32px;

    @media (max-width: 768px) {
      width: 100%;
    }
  `;

  return <StyledBox className={className}>{children}</StyledBox>;
}
