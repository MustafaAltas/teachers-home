import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AppContext from "../context/AppContext";
import { addData, useData } from "../firebase/Database";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";
import { onayMesaj } from "../helper/Toastify";

const ProfileDiv = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    /* z-index: -1; */
  }
  .profile-img {
    display: flex;
    flex-direction: column;
  }
  .profile-input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    input[type="file"] {
      display: none;
    }
  }
  .input-label {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
  }
`;
function Profile() {
  const { currentTeacher } = useContext(AppContext);
  const { dataImage } = useData();
  const [imgUrl, setImgUrl] = useState({ file: "", imagePreviewUrl: "" });
  const [databaseToProfile, setDatabaseToProfile] = useState();

  const handleFile = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImgUrl({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const onClickResim = () => {
    const userId = currentTeacher.uid;
    const name = currentTeacher.displayName;
    const email = currentTeacher.email;
    const imageUrl = imgUrl.imagePreviewUrl;
    addData(userId, name, email, imageUrl);
    onayMesaj("Resim Eklendi")
  };

  useEffect(() => {
    setDatabaseToProfile([...dataImage]);
  }, [dataImage]);
  return (
    <ProfileDiv>
      <div className="profile">
        <div className="profile-img">
          {databaseToProfile
            ?.filter((e) => e.id === currentTeacher.uid)
            .map((e) => {
              return <img src={e?.profile_picture} alt="" width="250px" key={e.id} />;
            })}
          <div className="profile-input">
            <label htmlFor="x" className="input-label">
              <AddBoxIcon />
            </label>
            <input type="file" name="" id="x" onChange={handleFile} />
            <Button variant="contained" color="success" onClick={onClickResim}>
              Ekle
            </Button>
          </div>
        </div>

        <div>
          <h6>Full Name</h6>
          <h5>{currentTeacher?.displayName}</h5>
          <h6>E-mail</h6>
          <h5>{currentTeacher?.email}</h5>
        </div>
      </div>
    </ProfileDiv>
  );
}

export default Profile;
