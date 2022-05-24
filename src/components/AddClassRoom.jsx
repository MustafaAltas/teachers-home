import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AppContext from "../context/AppContext";
import { createClassRoom,useClassRoom} from "../firebase/Database";
import ClassList from "./ClassList";
import { onayMesaj, uyarıMesaj } from "../helper/Toastify";

function AddClassRoom() {
  const [sınıfName, setSınıfName] = useState("");
  const { currentTeacher } = useContext(AppContext);
  const { dataClassRoom } = useClassRoom();
  const handleClass = (e) => {
    setSınıfName(e.target.value);
  };

  const handleClassRoom = () => {
    const control = dataClassRoom.filter((e) => e.classroom === sınıfName);
    console.log(control);
    if (sınıfName !== "" && control.length === 0) {
      createClassRoom(currentTeacher.displayName, sınıfName);
      onayMesaj("Sınıf başarılı bir şekilde eklendi");
    } else if (sınıfName === "") {
      uyarıMesaj("Lütfen sınıf ismi yazınız");
    } else if (control.length > 0) {
      uyarıMesaj("Bu sınıf bulunmaktadır");
    }
    setSınıfName("");
  };

  return (
    <div
      style={{
        display: "flex",
        aligItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          aligItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          label="Sınıf Ekle"
          variant="filled"
          color="success"
          focused
          onChange={handleClass}
          value={sınıfName}
        />
        <Button variant="text" onClick={handleClassRoom}>
          <AddIcon />
        </Button>
      </div>
      <ClassList/>
    </div>
  );
}

export default AddClassRoom;
