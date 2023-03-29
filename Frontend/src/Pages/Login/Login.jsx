import React from "react";
import styled from "styled-components";
import NavbarB from "../../Components/NavbarB";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Header from "./Header";
import AuthFooter from "../../Components/AuthFooter";

const Login = () => {
  return (
    <SignupMain>
      <NavbarB />
      <Header />
      {/*  */}
      <SignupForm>
        <InputContainer>
          <Input type="email" placeholder="Email" />
          <Label className="input-label">Email</Label>
          <Span className="input-highlight"></Span>
        </InputContainer>
        <InputContainer>
          <Input type="email" placeholder="Password" />
          <Label className="input-label">Email</Label>
          <Span className="input-highlight"></Span>
        </InputContainer>
        <Submit>
          <FaRegArrowAltCircleRight />
        </Submit>
      </SignupForm>
      <AuthFooter />
    </SignupMain>
  );
};

export default Login;
//
const SignupMain = styled.div`
  margin-top: 6rem;
`;

const SignupForm = styled.form`
  width: 36%;
  margin: auto;
  min-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const InputContainer = styled.div`
  position: relative;
  border: 1px solid #96949494;
  padding-left: 1rem;
  padding-top: 5px;
  border-radius: 5px;
`;
const Input = styled.input`
  height: 50px;
  display: block;
  width: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: transparent;
  &:focus + .input-label {
    font-size: 12px;
    color: #007bff;
  }
  &:focus + .input-label + .input-highlight {
    width: 100%;
  }
`;
const Label = styled.label`
  padding-left: 1.1rem;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
  color: rgba(204, 204, 204, 0);
  pointer-events: none;
  transition: all 0.3s ease;
`;
const Span = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #007bff;
  transition: all 0.3s ease;
`;

const Submit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: transparent;
  background: none;
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    color: #007bff;
  }
  &:focus {
    color: red;
  }
`;
