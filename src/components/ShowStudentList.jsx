import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useClassRoom, useStudentData } from "../firebase/Database";
import AppContext from "../context/AppContext";
import ShowStudentListTable from "./ShowStudentListTable";
import {uyarıMesaj} from "../helper/Toastify"
const StudentListWrapper = styled.div`
  width: 40vw;
  min-width: 450px;
  max-height: 460px;
  min-height: 459px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;
function ShowStudentList({updateControl}) {
  const { currentTeacher } = useContext(AppContext);
  const { dataClassRoom } = useClassRoom();
  const { students } = useStudentData();
  const [studentList,setStudentList] = useState("");
  const [studentList2,setStudentList2] = useState("");
  const [change,setChange] = useState(false)
  useEffect(() => {
    setStudentList(students?.filter((e) => e.id === currentTeacher.uid))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[students],change)

  const handleChange = async (e) =>{
    const x = await studentList[0][`${e.target.value}`]
    setChange(!change)
    console.log(x)
    if (x !== undefined) {
      await setStudentList2(Object.values(studentList[0][`${e.target.value}`]))
    }else {
      uyarıMesaj("Sınıfta öğrenci bulunmamaktadır!!!")
    }
    
  }

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
      <ShowStudentListTable studentList2={studentList2}/>
    </StudentListWrapper>
  );
}

export default ShowStudentList;
