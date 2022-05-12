import React from "react";
import styled from "styled-components";
import logo from "../assets/Teacher_s.svg"
import {Link } from "react-router-dom";
const Wrapper = styled.div`
  height: 3rem;
  background-color: aqua;
  color: red;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  .nav-links {
    list-style: none;
    display: flex;
    gap: 10px;
    li {
      text-decoration: none;
    }
  }
`;

function Navbar() {
  return <Wrapper>
    <img src={logo} alt="logo" width="100px" />
    <nav >
      <ul className="nav-links">
        <li><Link to="/">Main</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
    <div>m</div>
  </Wrapper>;
}

export default Navbar;
