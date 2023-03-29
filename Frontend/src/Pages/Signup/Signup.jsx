import React from "react";
import styled from "styled-components";
import NavbarB from "../../Components/NavbarB";
import Country from "../../Components/Country";
import Header from "./Header";
import AuthFooter from "../../Components/AuthFooter";

const Signup = () => {
  return (
    <SignupMain>
      <NavbarB />
      <Header />
      {/*  */}
      <SignupForm>
        <InputContainer>
          <Input type="text" placeholder="Username" />
          <Label className="input-label">Username</Label>
          <Span className="input-highlight"></Span>
        </InputContainer>
        <InputContainer>
          <Input type="email" placeholder="Email" />
          <Label className="input-label">Email</Label>
          <Span className="input-highlight"></Span>
        </InputContainer>
        <InputContainer>
          <Input type="email" placeholder="Age" />
          <Label className="input-label">Email</Label>
          <Span className="input-highlight"></Span>
        </InputContainer>
        <Country />
        <InputContainer>
          <Input type="email" placeholder="Password" />
          <Label className="input-label">Email</Label>
          <Span className="input-highlight"></Span>
        </InputContainer>
        <InputContainer>
          <Input type="email" placeholder="Confirm Password" />
          <Label className="input-label">Email</Label>
          <Span className="input-highlight"></Span>
        </InputContainer>

        <Logo>
          <img
            width={"100%"}
            src="https://appleid.cdn-apple.com/static/bin/cb1900903086/dist/assets/privacy-icon.png"
            alt="privacy_logo"
          />
        </Logo>
        <Privacy>
          Your Bolt&nbsp;ID information is used to allow you to sign in securely
          and access your data. Bolt records certain data for security, support
          and reporting purposes. If you agree, Apple may also use your
          Bolt&nbsp;ID information to send you marketing emails and
          communications, including based on your use of Bolt services.{" "}
          <StyledLink href="#">See how your data is managed.</StyledLink>
        </Privacy>
        <Submit type="submit" value="Continue" />
      </SignupForm>
      <AuthFooter />
    </SignupMain>
  );
};

export default Signup;
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
  margin-bottom: 2rem;
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
const Privacy = styled.div`
  font-size: small;
  color: grey;
  text-align: justify;
`;
const Logo = styled.div`
  width: 5%;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: -1rem;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #007bff;
`;
const Submit = styled.input`
  width: 120px;
  margin: auto;
  font-size: 18px;
  letter-spacing: -0.022em;
  font-weight: 400;
  background: linear-gradient(#42a1ec, #0070c9);
  border: 1px solid #07c;
  border-radius: 4px;
  min-width: 30px;
  padding: 4px 15px;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
`;
