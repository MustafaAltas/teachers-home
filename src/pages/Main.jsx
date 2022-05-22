import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MediaCard from "../components/MediaCard";
import { useData } from "../firebase/Database";
function Main() {
  const { dataImage } = useData();
  const [teacherMain,setTeacherMain] = useState();
  useEffect(() => {
    setTeacherMain([...dataImage])
  },[dataImage])
  return (
    <Box sx={{ width: "100%", margin: "3rem auto" }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {teacherMain?.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <MediaCard item={item}/>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Main;
