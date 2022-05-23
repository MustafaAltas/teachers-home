import { getDatabase, onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
export const addData = (userId, name, email, imageUrl) => {
  const db = getDatabase();
  set(ref(db, "teachers/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
};

export const createClassRoom = ( name,classRoomName) => {
  const db = getDatabase();
  set(ref(db, "classroom/"), {
    username: name,
    classroom : classRoomName
  });
};

export const useData = (postId) => {
  const [dataImage, setDataImage] = useState("");
  useEffect(() => {
    const db = getDatabase();
    const teacherRef = ref(db, "teachers/");
    onValue(teacherRef, (snapshot) => {
      const data = snapshot.val();
      const arr = [];
      for (const id in data) {
        arr.push({ id, ...data[id] });
      }
      setDataImage(arr);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { dataImage };
};
