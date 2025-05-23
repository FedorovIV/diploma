import React, { useContext } from "react";
import styled from "styled-components";


import { observer } from "mobx-react-lite";

import { Navigate } from "react-router";

import { useMediaQuery } from "react-responsive";

import Context from "../..";
import { AccessLevels } from "../../shared/accessLevel/accessLevel";

import Header from "../Main/Header";

import ProfileForm from "./ProfileForm";
import MobileCreateProfile from "./MobileCreateProfile/MobileCreateProfile";

const Container = styled.div`
  height: 100vh;
  min-height: 1024px;
  max-height: 1200px;
  width: 100%;
  max-width: 2400px;

  background-color: #ffffff;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

const Wrapper = styled.div`
  height: min-content;
  background-color: #ffffff;
  position: absolute;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 300px;
`;

const Text = styled.h2`
  font-size: 45px;
  font-weight: 500;
  top:150px;
  left:50px;
  position: absolute;
  @media (max-width: 768px) {
    display: none;
  }
`;
const CreateProfile = observer(() => {
  const { store } = useContext(Context);
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return store.accessLevel === AccessLevels.LEVEL2 ? (
    isDesktop ? (
      <Container>
        <Header color="#f1e2ff" />
        <Wrapper>
          <Text>Let's create profile!</Text>
          <ProfileForm />
        </Wrapper>
      </Container>
    ) : (
      <MobileCreateProfile />
    )
  ) : (
    <Navigate to="/swiper" />
  );
});

export default CreateProfile;
