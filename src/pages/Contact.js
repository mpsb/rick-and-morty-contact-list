import React, {useEffect, useState} from "react";
import {Outlet} from 'react-router-dom';
import styled from "styled-components";
import Header from "../components/Header";
import Box from "../components/Box";
import Input from "../components/Input";
import Select from "../components/Select";
import ContactListItem from "../components/ContactListItem";
import RouterLink from "../components/RouterLink";
import Flex from "../components/Flex";

const ContactBox = styled(Box)`
  width: 30%;
  flex-direction: column;
  padding: 16px;
  overflow-y: scroll;
  height: 87.5vh;

  @media (max-width: 768px) {
    width: auto;
  }
`;

const StyledFlex = styled(Flex)`
@media (max-width: 768px) {
  flex-direction: column;
}
`;

const genderOptions = [{value: '', text: 'Gender'}, {value: 'male', text: 'Male'}, {value: 'female', text: 'Female'}, {value: 'genderless', text: 'Genderless'}, {value: 'unknown', text: 'Unknown'}];
const statusOptions = [{value: '', text: 'Status'}, {value: 'dead', text: 'Dead'}, {value: 'alive', text: 'Alive'}, {value: 'unknown', text: 'Unknown'}];

export default function Contact() {
  const [profiles, setProfiles] = useState([]);
  const [nameToSearch, setNameToSearch] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  const handleInputChange = event => {
    console.log(event.target.value)
    setNameToSearch(event.target.value);
  }

  const handleGenderChange = event => {
    console.log(event.target.value)
    setGender(event.target.value);
  }

  const handleStatusChange = event => {
    console.log(event.target.value)
    setStatus(event.target.value);
  }

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${nameToSearch}&gender=${gender}&status=${status}`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data.results);
            setProfiles(data.results);
         })
         .catch((err) => {
            console.log(err.message);
         });
  }, [nameToSearch, gender, status])
  

  return (
    <StyledFlex flexDirection="row">
      <ContactBox>
        <Header>Contact</Header>
        <Input placeholder="Search for characters..." handleChange={handleInputChange} value={nameToSearch}/>
        <Select options={genderOptions} handleChange={handleGenderChange} value={gender}/>
        <Select options={statusOptions} handleChange={handleStatusChange} value={status}/>
        {profiles ? profiles.map((profile) => (<RouterLink to={`/contact/${profile.id}`} fontSize={16}><ContactListItem name={profile.name} species={profile.species} imageUrl={profile.image}/></RouterLink>)) : <p>No characters found.</p>}
      </ContactBox>
      <Outlet/>
    </StyledFlex>
  );
}
