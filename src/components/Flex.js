import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};

  @media (max-width: 768px) {
    width: auto;
  }
`;

export default function Flex({ className, flexDirection, children }) {
  return (
    <StyledFlex className={className} flexDirection={flexDirection}>
      {children}
    </StyledFlex>
  );
}
