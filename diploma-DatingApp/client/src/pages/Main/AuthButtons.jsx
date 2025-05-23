import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import Context from "../..";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const LogInButton = styled.button`
  background-color: rgba(255, 255, 255, 0);
  border: 0;
  border-radius: 15px;
  height: 90px;
  font-size: 45px;
  padding: 0px 30px;
  cursor: pointer;
  color:black;
  width: max-content;

  &:active {
    transform: scale(1.05);
  }
  @media (max-width: 1224px) {
    width: max-content;
  }
`;

const SignUpButton = styled.button`
  background-color: rgba(255, 255, 255);
  border: 5px solid #f1e2ff;
  border-radius: 15px;
  height: 90px;
  font-size: 45px;
  padding: 0px 30px;
  cursor: pointer;
  color:black;
  width: max-content;

  &:active {
    transform: scale(1.05);
  }
  @media (max-width: 1224px) {
    width: max-content;
  }
`;

const LogOutButton = styled.button`
  background-color: rgba(255, 255, 255);
  border: 5px solid #f1e2ff;
  border-radius: 15px;
  height: 90px;
  font-size: 45px;
  padding: 0px 30px;
  cursor: pointer;
  color:black;
  width: max-content;

  &:active {
    transform: scale(1.05);
  }
  @media (max-width: 1224px) {
    width: max-content;
  }
`;

const AuthButtons = () => {
  const { store } = useContext(Context);

  return (
    <Container>
      {store.isAuth ? (
        <LogOutButton onClick={()=>{store.logout()}}>Log out</LogOutButton>
      ) : (
        <>
          <Link to="/logIn">
            <LogInButton>Log in</LogInButton>
          </Link>
          <Link to="/signUp">
            <SignUpButton>Sign up</SignUpButton>
          </Link>
        </>
      )}
    </Container>
  );
};

export default observer(AuthButtons);
