import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AppContext from "../context/AppContext";
import { addData, useData } from "../firebase/Database";

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
  }
  .profile-img {
    display: flex;
    flex-direction: column;
  }
`;
function Profile() {
  const { currentTeacher } = useContext(AppContext);
  console.log(currentTeacher);
  const { dataImage } = useData();
  console.log(dataImage);
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

  console.log(imgUrl);
  const onClickResim = () => {
    const userId = currentTeacher.uid;
    const name = currentTeacher.displayName;
    const email = currentTeacher.email;
    const imageUrl = imgUrl.imagePreviewUrl;
    addData(userId, name, email, imageUrl);
  };

  useEffect(() => {
    setDatabaseToProfile([...dataImage]);
  }, [dataImage]);
  console.log(databaseToProfile);
  return (
    <ProfileDiv>
      <div></div>
      <div className="profile">
        <div className="profile-img">
          {databaseToProfile
            ?.filter((e) => e.id === currentTeacher.uid)
            .map((e) => {
              return <img src={e?.profile_picture} alt="" width="200px" />;
            })}
          <input type="file" name="" id="" onChange={handleFile} />
          <button onClick={onClickResim}>Ekle</button>
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
