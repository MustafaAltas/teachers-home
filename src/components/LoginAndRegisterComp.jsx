import React, { useContext } from "react";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Link } from "react-router-dom";
import NoMeetingRoomIcon from "@mui/icons-material/NoMeetingRoom";
import AppContext from "../context/AppContext";
import { teacherLogOut } from "../firebase/Firebase";
import PersonIcon from "@mui/icons-material/Person";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  align-items: center;
  .login-register {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    transition: all 0.5s;
  }
  .login-register:hover {
    color: orange;
  }
`;

function LoginAndRegisterComp() {
  const { currentTeacher } = useContext(AppContext);
  return (
    <Wrapper>
      {!currentTeacher ? (
        <>
          <Link to="/login" className="login-register">
            Login <LoginIcon />
          </Link>
          <Link to="/register" className="login-register">
            Register <HowToRegIcon />
          </Link>
        </>
      ) : (
        <>
          <div className="login-register" onClick={teacherLogOut}>
            Logout <NoMeetingRoomIcon />
          </div>
          <div className="login-register">
            {currentTeacher} <PersonIcon />
          </div>
        </>
      )}
    </Wrapper>
  );
}

export default LoginAndRegisterComp;
