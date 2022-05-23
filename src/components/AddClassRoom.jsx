import React from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
function AddClassRoom() {
  return (
    <div style={{display:"flex", aligItems:"center",justifyContent:"center"}}>
      <TextField
        label="Sınıf Ekle"
        variant="filled"
        color="success"
        focused
      />
      <Button variant="text"><AddIcon/></Button>
    </div>
  );
}

export default AddClassRoom;
