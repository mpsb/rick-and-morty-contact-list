import React from "react";
import styled from "styled-components";
import { Box } from "./Box";
import Flex from "./Flex";
import ProfileImage from "./ProfileImage";
import ContactProfileName from "../text/ContactProfileName";

const ContactListItemBox = styled(Box)`
  transition: 0.2s ease;
  margin-top: 16px;

  :hover {
    background-color: var(--primary-color-shade);
    cursor: pointer;
  }
`;

export default function ContactListItem({ name, species, imageUrl, role }) {
  return (
    <ContactListItemBox
      flexDirection="row"
      gap={16}
      alignItems="center"
      padding={16}
      role={role}
    >
      <ProfileImage imageUrl={imageUrl} width={57} />
      <Flex>
        <ContactProfileName>{name}</ContactProfileName>
        <span>{species}</span>
      </Flex>
    </ContactListItemBox>
  );
}
