import React from "react";
import Box from "./Box";

export default function ContactListItem({ name, species }) {
  return (
    <Box>
      <h3>{name}</h3>
      <span>{species}</span>
    </Box>
  );
}
