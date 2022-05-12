import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../assets/Teacher_s.svg";
import { Link } from "react-router-dom";
import LoginAndRegisterComp from "./LoginAndRegisterComp";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import AppContext from "../context/AppContext";

const Wrapper = styled.div`
  .show-navbar {
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    .nav-links {
      list-style: none;
      display: flex;
      gap: 2rem;
      a {
        text-decoration: none;
        color: black;
        font-family: "Roboto", sans-serif;
        font-weight: 700;
      }
      li {
        transition: all 0.5s;
      }
      li:hover {
        transform: translateX(5%) scale(0.95);
        text-decoration: underline;
        background-color: rgba(255, 255, 255, 0.5);
      }
    }
    .nav-hamburger {
      display: none;
    }
    @media screen and (max-width: 750px) {
      .nav-loginregister {
        display: none;
      }
      .nav-hamburger {
        display: inline;
        border: none;
      }
      .nav-links {
        display: none;
      }
    }
  }
  .close-navbar {
    display: none;
  }
`;

function Navbar() {
  const { forSideBarIsOpen, setForSideBarIsOpen } = useContext(AppContext);
  const handleHamburger = () => {
    setForSideBarIsOpen(!forSideBarIsOpen);
  };
  return (
    <Wrapper>
      <div className={`${forSideBarIsOpen ? "show-navbar" : "close-navbar"}`}>
        <img src={logo} alt="logo" width="100px" />
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="nav-loginregister">
          <LoginAndRegisterComp />
        </div>
        <div className="nav-hamburger">
          <IconButton
            variant="text"
            color="secondary"
            onClick={handleHamburger}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
