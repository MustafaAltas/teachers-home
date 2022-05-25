import React, { useContext } from "react";
import styled from "styled-components";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useClassRoom, useStudentData } from "../firebase/Database";
import AppContext from "../context/AppContext";

const StudentListWrapper = styled.div`
  width: 40vw;
  min-width: 450px;
  min-height: 485px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 2rem;
`;
function ShowStudentList() {
  const { currentTeacher } = useContext(AppContext);
  const { dataClassRoom } = useClassRoom();
  const { students } = useStudentData();
  const handleChange = (e) =>{
    console.log(e.target.value)
  }
  console.log(students )
  return (
    <StudentListWrapper>
      <InputLabel id="demo-simple-select-helper-label">ClassRoom</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        name="classroom"
        label="Sınıf"
        sx={{ m: 1, minWidth: 210 }}
        onChange={handleChange}
      >
        {dataClassRoom
          ?.filter((e) => e.username === currentTeacher.displayName)
          .map((item) => {
            return (
              <MenuItem value={item.classroom} key={item.id}>
                {item.classroom}
              </MenuItem>
            );
          })}
      </Select>
    </StudentListWrapper>
  );
}

export default ShowStudentList;
