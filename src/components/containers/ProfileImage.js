import React from "react";
import styled from "styled-components";

const StyledProfileImageContainer = styled.div`
  border: 4px solid var(--primary-color);
  background: url(${(props) => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 90px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
`;

export default function ProfileImage({ imageUrl, width }) {
  return <StyledProfileImageContainer imageUrl={imageUrl} width={width} />;
}
