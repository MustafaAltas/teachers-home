import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, updateProfile,signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyADPXKqZPzFoGNxcJO4JGlx_q3-SPmdOqo",
  authDomain: "teacher-s-room.firebaseapp.com",
  projectId: "teacher-s-room",
  storageBucket: "teacher-s-room.appspot.com",
  messagingSenderId: "560175448207",
  appId: "1:560175448207:web:4cf6a306b0274d41f9b0fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const teacherRegister = (email, password,isimSoyisim,navigate) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: isimSoyisim
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
      navigate("/")
    })
    .catch((error) => {

    });
};


export const teacherLoginFirebase = (email, password,navigate) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    navigate("/")
  })
  .catch((error) => {
    console.log(error)
  });
};

export const teacherLogOut = () => {
  signOut(auth)
}

export const teacherFullName = (setCurrentTeacher) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentTeacher(user.displayName)
    } else {
      setCurrentTeacher(false)
    }
  });
}