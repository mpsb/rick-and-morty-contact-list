import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Box from "../components/Box";
import Header from "../components/Header";

const StyledBox = styled(Box)`
  width: 55%;
`;

export default function ContactProfile() {
  const { userId } = useParams();
  console.log(userId);
  return (
    <StyledBox>
      <Header>{userId} Risotto Groupon</Header>
    </StyledBox>
  );
}
