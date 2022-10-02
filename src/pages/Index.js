import React from "react";
import styled from "styled-components";
import Flex from "../components/Flex";
import Title from "../components/Title";

const StyledFlex = styled(Flex)`
  width: 100%;
`;

export default function Index() {
  return (
    <StyledFlex gap={16} alignItems="center" justifyContent="center">
      <Title>Welcome!</Title>
      Click on the Contact button to get started.
    </StyledFlex>
  );
}
