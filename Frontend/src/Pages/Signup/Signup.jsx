import React, { useState } from "react";
import styled from "styled-components";
import NavbarB from "../../Components/NavbarB";
import Country from "../../Components/Country";
import Header from "./Header";
import AuthFooter from "../../Components/AuthFooter";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupAction } from "../../Redux/Auth/auth.action";
import { GrFormViewHide } from "react-icons/gr";
import { BiShowAlt, BiMessageAltError, BiError } from "react-icons/bi";
import { toast } from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //
  const [show, setShow] = useState(false);
  //
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //
  //
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    //
    let body = {
      username,
      email,
      password,
      country,
      age: +age,
      role,
    };
    //
    //
    if (password.length < 7) {
      toast.error("Password is short !", {
        icon: (
          <BiError
            style={{ color: "yellow", fontSize: "1.5rem", fontWeight: "800" }}
          />
        ),
        style: {
          borderRadius: "50px",
          background: "#989898",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    } else {
      if (password !== confirmPassword) {
        toast.error("Passwords are not matching !", {
          icon: (
            <BiError
              style={{ color: "yellow", fontSize: "1.5rem", fontWeight: "800" }}
            />
          ),
          style: {
            borderRadius: "50px",
            background: "#989898",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
          },
        });
      } else {
        setUsername("");
        setEmail("");
        setAge("");
        setConfirmPassword("");
        setAge("");
        setPassword("");
        setCountry("");
        setRole("");
        //
        console.log(body);
        dispatch(signupAction(body, navigate));
      }
    }
  };
  return (
    <SignupMain>
      <NavbarB />
      <Header />
      {/*  */}
      <SignupForm action="submit" onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Label className="input-label">Username</Label>
          <Span className="input-highlight"></Span>
        </InputContainer>
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
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <Label className="input-label">Age</Label>
          <Span className="input-highlight"></Span>
        </InputContainer>
        <Country country={country} setCountry={setCountry} />\
        <Role value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </Role>
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
        <InputContainer>
          <Input
            type="text"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Label className="input-label">Confirm Password</Label>
          <Span className="input-highlight"></Span>
        </InputContainer>
        <Logo
          onClick={() =>
            toast.success("hsvhcvh", {
              icon: "bb",
              style: {
                borderRadius: "10px",
              },
            })
          }
        >
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  @media (max-width: 793px) {
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
const ShowHide = styled.div`
  position: absolute;
  right: 20px;
  top: 25%;
  z-index: 10;
  cursor: pointer;
  font-size: 1.3rem;
  color: #007bff;
`;
const Role = styled.select`
  height: 50px;
  font-size: 16px;
  padding-left: 0.8rem;
  border: 1px solid #96949494;
  color: grey;
  border-radius: 5px;
  &:focus {
    outline: 2px solid #007bff;
  }
  margin-top: -2.6rem;
`;
