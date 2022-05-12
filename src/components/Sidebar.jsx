import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../assets/Teacher_s.svg";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import IconButton from "@mui/material/IconButton";
import AppContext from "../context/AppContext";

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
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
      </div>
    </Wrapper>
  );
}

export default Sidebar;
