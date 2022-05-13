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
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
