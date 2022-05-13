import React from "react";
import styled from "styled-components";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {Link } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  align-items: center;
  .login-register{
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      text-decoration: none;
      color:black;
      transition: all .5s;
  }
  .login-register:hover {
      color:orange
  }
`;

function LoginAndRegisterComp() {
  return (
      <Wrapper>
          <Link to="/login" className="login-register">Login <LoginIcon/></Link>
          <Link to="/register" className="login-register">Register <HowToRegIcon/></Link>
      </Wrapper>
  )
}

export default LoginAndRegisterComp;
