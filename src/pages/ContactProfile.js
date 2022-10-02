import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Box from "../components/containers/Box";
import Flex from "../components/containers/Flex";
import Header from "../components/text/Header";
import ProfileImage from "../components/containers/ProfileImage";
import Subheader from "../components/text/Subheader";
import dateFormatter from "../helpers";
import { BREAKPOINTS } from "../constants";

const StyledBox = styled(Box)`
  width: 100%;
  gap: 16px;
  margin-left: 16px;
  overflow-y: scroll;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    margin: 16px 0px;
    width: auto;
    overflow-y: hidden;
  }
`;

const EpisodeBox = styled(Box)`
  padding: 0px;
  border-bottom: 2px var(--primary-color) solid;
`;

const EpisodeRow = styled(Flex)`
  border-bottom: 2px var(--primary-color) solid;
  justify-content: space-between;
  width: auto;
  padding: 16px;
  margin-bottom: -1px;
`;

const EpisodeItem = styled.div`
  width: 25%;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
`;

export default function ContactProfile() {
  const [episodeList, setEpisodeList] = useState([]);
  const selectedContactProfile = useSelector((state) => state.setProfile.value);

  useEffect(() => {
    console.log(selectedContactProfile);

    setEpisodeList([]);

    const episodes = selectedContactProfile.episode;

    episodes.forEach((episode) =>
      fetch(episode)
        .then((response) => response.json())
        .then((data) => {
          setEpisodeList((episodeList) => [...episodeList, data]);
        })
        .catch((err) => {
          console.log(err.message);
        })
    );
  }, [selectedContactProfile]);
  return (
    <StyledBox>
      <Flex flexDirection="row" gap={32}>
        <ProfileImage imageUrl={selectedContactProfile.image} width={100} />
        <Header>{selectedContactProfile.name}</Header>
      </Flex>
      <Flex gap={12}>
        <Subheader>Personal info</Subheader>
        <Box gap={16} flexDirection="row">
          <Flex gap={16} alignItems="flex-end">
            <div>Status:</div>
            <div>Gender:</div>
            <div>Location:</div>
            <div>Species:</div>
            <div>Origin:</div>
            <div>Created:</div>
          </Flex>
          <Flex gap={16}>
            <div>{selectedContactProfile.status}</div>
            <div>{selectedContactProfile.gender}</div>
            <div>{selectedContactProfile.location.name}</div>
            <div>{selectedContactProfile.species}</div>
            <div>{selectedContactProfile.origin.name}</div>
            <div>{dateFormatter(selectedContactProfile.created)}</div>
          </Flex>
        </Box>
      </Flex>
      <Flex gap={12}>
        <Subheader>Episodes</Subheader>
        <EpisodeBox gap={16} flexDirection="column">
          <EpisodeRow flexDirection="row" gap={8}>
            <EpisodeItem>Name</EpisodeItem>
            <EpisodeItem>Aired</EpisodeItem>
            <EpisodeItem>Episode</EpisodeItem>
            <EpisodeItem>Created</EpisodeItem>
          </EpisodeRow>
          {episodeList.map((episode) => (
            <EpisodeRow flexDirection="row" gap={8}>
              <EpisodeItem>{episode.name}</EpisodeItem>
              <EpisodeItem>{dateFormatter(episode.air_date)}</EpisodeItem>
              <EpisodeItem>{episode.episode}</EpisodeItem>
              <EpisodeItem>{dateFormatter(episode.created)}</EpisodeItem>
            </EpisodeRow>
          ))}
        </EpisodeBox>
      </Flex>
    </StyledBox>
  );
}
