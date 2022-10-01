import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Box from "../components/Box";
import Header from "../components/Header";

const StyledBox = styled(Box)`
  width: 55%;
  margin-left: 16px;

  @media (max-width: 768px) {
    margin: 16px 0px;
    width: auto;
  }
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
