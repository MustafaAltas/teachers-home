import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../assets/Teacher_s.svg";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import IconButton from "@mui/material/IconButton";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import LoginAndRegisterComp from "./LoginAndRegisterComp";

const Wrapper = styled.div`
  background: rgb(235, 235, 235);
  background: linear-gradient(
    180deg,
    rgba(235, 235, 235, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 1s;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transition: all 1s;
    transform: translate(0);
    z-index: 999;
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .nav-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    gap: 2rem;
    a {
      position: relative;
      padding: 1rem 0 0.5rem;
      margin: 0 1.5rem;
      color: black;
      text-decoration: none;
      text-transform: uppercase;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%) scaleX(0);
        transform-origin: 50% 50%;
        width: 100%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.8);
        transition: transform 250ms;
      }
      &:hover {
        &::after {
          transform: translateX(-50%) scaleX(1);
        }
      }
    }
    /* li {
      transition: all 0.5s;
    }
    li:hover {
      transform: translateX(1%) scale(0.98);
      background-color: rgba(0, 0, 0, 0.1);
    } */
  }
`;
function Sidebar() {
  const { forSideBarIsOpen, setForSideBarIsOpen } = useContext(AppContext);
  const handleCancel = () => {
    setForSideBarIsOpen(!forSideBarIsOpen);
  };
  return (
    <Wrapper>
      <div className={`${forSideBarIsOpen ? "sidebar" : "show-sidebar"}`}>
        <div className="sidebar-header">
          <img src={logo} alt="logo" width="100px" />
          <IconButton onClick={handleCancel}>
            <HighlightOffIcon />
          </IconButton>
        </div>
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
        <LoginAndRegisterComp />
      </div>
    </Wrapper>
  );
}

export default Sidebar;
