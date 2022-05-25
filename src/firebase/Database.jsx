import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
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
  const classRoomNameRef = ref(db, "classroom/")
  const classRoomNameRef2 = push(classRoomNameRef)
  set((classRoomNameRef2), {
    username: name,
    classroom : classRoomName
  });
};

export const addStudent = (classRoomName,fullname,email,number,teacherEmail) => {
  const db = getDatabase();
  const studentAdd = ref(db,`students/${teacherEmail}/${classRoomName}/`)
  const studentAddRef = push(studentAdd)
  set((studentAddRef),{
    fullname : fullname,
    email : email,
    number: number
  })
}

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

export const useClassRoom = () =>{
  const [dataClassRoom,setDataClassRoom] = useState();
  useEffect(() =>{
      const db = getDatabase();
      const blogRef = ref(db,"classroom");
      onValue(blogRef, (snapshot) => {
          const data = snapshot.val();
          const arr = [];
          for (const id in data) {
              arr.push({id,...data[id]});
          }
  
          setDataClassRoom(arr);
        });


  },[])
  return {dataClassRoom}
}
export const useStudentData = () =>{
  const [students,setStudents] = useState();
  useEffect(() =>{
      const db = getDatabase();
      const blogRef = ref(db,"students/");
      onValue(blogRef, (snapshot) => {
          const data = snapshot.val();
          const arr = [];
          for (const id in data) {
              arr.push({id,...data[id]});
          }
  
          setStudents(arr);
        });


  },[])
  return {students}
}

export const DeleteClassRoom =(id) =>{
  const db = getDatabase();
  remove(ref(db,"classroom/" + id));
}