import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  border: 4px solid #8bcf21;
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap}px;
  padding: ${(props) => (props.padding ? props.padding : "32")}px;

  @media (max-width: 768px) {
    width: auto;
  }
`;

export default function Box({
  className,
  flexDirection,
  gap,
  alignItems,
  padding,
  children,
}) {
  return (
    <StyledBox
      className={className}
      flexDirection={flexDirection}
      gap={gap}
      alignItems={alignItems}
      padding={padding}
    >
      {children}
    </StyledBox>
  );
}
