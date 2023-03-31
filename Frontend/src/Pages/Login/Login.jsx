import React, { useState } from "react";
import styled from "styled-components";
import NavbarB from "../../Components/NavbarB";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Header from "./Header";
import AuthFooter from "../../Components/AuthFooter";
import { GrFormViewHide } from "react-icons/gr";
import { BiShowAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../Redux/Auth/auth.action";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //
  const [show, setShow] = useState(false);
  //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //
  //
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    //
    const body = {
      email,
      password,
    };
    //
    dispatch(loginAction(body, navigate));
  };
  return (
    <SignupMain>
      <NavbarB />
      <Header />
      {/*  */}
      <SignupForm action="submit" onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Label className="input-label">Email</Label>
          <Span className="input-highlight"></Span>
        </InputContainer>
        <InputContainer>
          <Input
            type={show ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Label className="input-label">Password</Label>
          <Span className="input-highlight"></Span>
          <ShowHide>
            {show ? (
              <BiShowAlt onClick={() => setShow(!show)} />
            ) : (
              <GrFormViewHide onClick={() => setShow(!show)} />
            )}
          </ShowHide>
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 769px) {
    width: 90%;
  }
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
const ShowHide = styled.div`
  position: absolute;
  right: 20px;
  top: 25%;
  z-index: 10;
  cursor: pointer;
  font-size: 1.3rem;
  color: #007bff;
`;
