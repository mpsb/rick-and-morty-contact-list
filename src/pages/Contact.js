/* eslint-disable react-hooks/exhaustive-deps */
import React, {createRef, useEffect, useRef, useState} from "react";
import { useInView } from 'react-intersection-observer';
import { useDispatch } from "react-redux";
import {Outlet} from 'react-router-dom';
import styled from "styled-components";
import Header from "../components/text/Header";
import {Box} from "../components/containers/Box";
import Button from "../components/interactive/Button";
import Input from "../components/interactive/Input";
import Select from "../components/interactive/Select";
import ContactListItem from "../components/containers/ContactListItem";
import RouterLink from "../components/interactive/RouterLink";
import Flex from "../components/containers/Flex";
import { setProfile } from "../features/selectedProfile/selectProfileSlice";
import { BREAKPOINTS } from "../constants";

const ContactBox = styled(Box)`
  width: auto;
  flex-direction: column;
  padding: 16px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width:  ${BREAKPOINTS.tablet}px) {
    width: auto;
    overflow-y: hidden;
  }
`;

const StyledFlex = styled(Flex)`
@media (max-width:  ${BREAKPOINTS.tablet}px) {
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
  const [isFiltersActive, setIsFiltersActive] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const resultRefs = useRef([]);

  const {ref, inView, entry} = useInView({threshold: 1});

  const dispatch = useDispatch();

  const handleProfileLinkClick = (event, key) => {
    dispatch(setProfile(resultRefs.current[key]));
  }

  const handleInputChange = event => {
    setNameToSearch(event.target.value);
  }

  const handleGenderChange = event => {
    setGender(event.target.value);
  }

  const handleStatusChange = event => {
    setStatus(event.target.value);
  }

  const resetFilters = () => {
    setStatus('');
    setGender('');
    setIsFiltersActive(false);
  }

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${nameToSearch}&gender=${gender}&status=${status}`)
         .then((response) => response.json())
         .then((data) => {
          setProfiles(data.results);
          setPageNumber(1);
         })
         .catch((err) => {
            console.log(err.message);
         });
  }, [nameToSearch, gender, status])

  useEffect(() => {
    if (gender !== '' | status !== '') {
      setIsFiltersActive(true);
    }
    else {
      setIsFiltersActive(false);
    }
  }, [gender, status])
  
  useEffect(() => {
    setPageNumber(pageNumber + 1);
  }, [inView])

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${nameToSearch}&gender=${gender}&status=${status}&page=${pageNumber}`)
         .then((response) => response.json())
         .then((data) => {
          console.log(data.results.length)
          setProfiles(profiles.concat(data.results));
         })
         .catch((err) => {
            console.log(err.message);
         });
  }, [pageNumber])

  return (
    <StyledFlex flexDirection="row">
      <ContactBox>
        <Header>Contact</Header>
        <Input placeholder="Search for characters..." handleChange={handleInputChange} value={nameToSearch}/>
        <Select options={genderOptions} handleChange={handleGenderChange} value={gender}/>
        <Select options={statusOptions} handleChange={handleStatusChange} value={status}/>
        {isFiltersActive ? <Button onClick={resetFilters} role="button">Clear filters</Button> : null}
        {profiles ? profiles.map((profile, index) => {
          resultRefs.current[index] = createRef();
          resultRefs.current[index] = profile;

          if(index === profiles.length - 1 && profiles.length%20 === 0) {
            return <div ref={ref} key={index}>
              <RouterLink to={`/contact/${profile.id}`} fontSize={16} onClick={event => handleProfileLinkClick(event, index)}><ContactListItem name={profile.name} species={profile.species} imageUrl={profile.image} role="listitem"/></RouterLink>
            </div>
          }

          return <RouterLink to={`/contact/${profile.id}`} fontSize={16} key={index} onClick={event => handleProfileLinkClick(event, index)}><ContactListItem name={profile.name} species={profile.species} imageUrl={profile.image} role="listitem"/></RouterLink>}) : <p>No characters found.</p>}
      </ContactBox>
      <Outlet/>
    </StyledFlex>
  );
}
