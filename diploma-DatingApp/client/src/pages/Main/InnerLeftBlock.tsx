import React, { useContext } from "react";
import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Context from "../..";

const Container = styled.div`
  background-color: inherit;
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: min-content;
  @media (max-width:1224px){
    width : 100%;
  }
`;

const Label1 = styled.p`
  font-size: 50px;
  font-weight: 600;
`;

const Label2 = styled.div`
  font-size: 35px;
  font-weight: 600;
`;

const InputBlock = styled.div<{isAuth:boolean}>`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  visibility: ${(props) => (props.isAuth ? 'hidden' : 'visible')};
`;

const InputLabel = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

const InputPlusButton = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 25px;
`;

const Input = styled.input`
  width: 576px;
  height: 65px;
  border-radius: 20px;
  border: 0 solid black;
  padding-left: 10px;
  font-size: 20px;
`;

const InputButton = styled.button`
  cursor: pointer;
  width: 200px;
  height: 65px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 0 solid black;
  background-color: #c768c0;
  &:active {
    transform: scale(1.05);
  }
  color: white;
  font-size: 25px;
  font-weight: 600;
  padding-left: 28px;
  text-align: left;
  display: flex;
  align-items: center;
  @media (max-width: 1224px) {
    width: 120px;
    margin-right:-10px
  }
`;

const ContinueButton = styled.button`
  cursor: pointer;
  width: fit-content;
  padding: 14px;
  padding-right: 27px;
  height: 65px;
  border-radius: 18px;
  background-color: #baa6b8;
  border: 0;
  &:active {
    transform: scale(1.05);
  }
  font-size: 25px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 15px;  
`;
const InnerLeftBlock = observer(() => {

  const {store} = useContext(Context);

  return (
    <Container  >
      <Label1>Start dating now!</Label1>
      <Label2>
        <p>Helping to put more of the real you in,</p>
        <p>for dating you feel good about</p>
      </Label2>
      
      <InputBlock isAuth={store.isAuth}>
        
        <InputLabel>Sign up with your email</InputLabel>
        <InputPlusButton>
          <Input />
          <Link to="/signUp" style={{textDecoration:"none"}}>
            <InputButton>Sign up</InputButton>
          </Link>
        </InputPlusButton>
      </InputBlock>
      {/* <ContinueButton>
        <FaGoogle size={30}/>
        <p>Continue with Google</p>
      </ContinueButton> */}
    </Container>
  );
});

export default InnerLeftBlock;
