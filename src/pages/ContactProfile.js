import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Box from "../components/Box";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const StyledBox = styled(Box)`
  width: 100%;
  margin-left: 16px;

  @media (max-width: 768px) {
    margin: 16px 0px;
    width: auto;
  }
`;

export default function ContactProfile() {
  const { userId } = useParams();
  const selectedContactProfile = useSelector((state) => state.setProfile.value);

  console.log(selectedContactProfile);
  return (
    <StyledBox>
      <Header>
        {userId} {selectedContactProfile.name}
      </Header>
    </StyledBox>
  );
}
