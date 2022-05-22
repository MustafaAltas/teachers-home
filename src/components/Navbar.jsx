import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../assets/Teacher_s.svg";
import { Link } from "react-router-dom";
import LoginAndRegisterComp from "./LoginAndRegisterComp";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import AppContext from "../context/AppContext";

const Wrapper = styled.div`
  background: rgb(235, 235, 235);
  background: linear-gradient(
    180deg,
    rgba(235, 235, 235, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  .show-navbar {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    .nav-links {
      list-style: none;
      display: flex;
      justify-content:space-around;
      align-items: center;
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
        transform: translateX(5%) scale(0.95);
        background-color: rgba(0, 0, 0, 0.1);
      } */
    }
    .nav-hamburger {
      display: none;
    }
    @media screen and (max-width: 890px) {
      display: flex;
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
  const { forSideBarIsOpen, setForSideBarIsOpen, currentTeacher } =
    useContext(AppContext);
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
              <Link to="/">Anasayfa</Link>
            </li>
            <li>
              <Link to="/about">Hakkımızda</Link>
            </li>
            <li>
              <Link to="/contact">İletişim</Link>
            </li>
          </ul>
          {currentTeacher && (
            <ul className="nav-links">
              <li>
                <Link to="/createclass">Sınıf Oluştur</Link>
              </li>
              <li>
                <Link to="/createstudent">Öğrenci Ekle</Link>
              </li>
              <li>
                <Link to="/process">İşlemler</Link>
              </li>
            </ul>
          )}
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
