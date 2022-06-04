import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";
import TeacherLogin from "../pages/TeacherLogin";
import TeacherRegister from "../pages/TeacherRegister";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Profile from "../pages/Profile";
import CreateClass from "../pages/CreateClass";
import CreateStudent from "../pages/CreateStudent";
import Process from "../pages/Process";
import Notes from "../pages/Notes";


function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<TeacherLogin />} />
        <Route path="/register" element={<TeacherRegister />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createclass" element={<CreateClass />} />
        <Route path="/createstudent" element={<CreateStudent />} />
        <Route path="/process" element={<Process />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
