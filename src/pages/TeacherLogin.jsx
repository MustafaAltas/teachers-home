import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { teacherLoginFirebase } from "../firebase/Firebase"; 
import {useNavigate } from "react-router-dom";
const ForLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 40vw;
    min-width: 450px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 2rem;
    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
    }
  }
`;

const myValidationSchema = Yup.object({
  email: Yup.string()
    .email("Hatalı giriş yaptınız...")
    .required("Lütfen E-mail adresinizi giriniz..."),
  password: Yup.string()
    .required("Şifre Girmeniz gerekmektedir.")
    .min(8, "Çok kısa/ En az 8 karakter giriniz.")
    .matches(/\d+/, "Şifre numara içermelidir.")
    .matches(/[a-z]+/, "şifre küçük harf içermelidir.")
    .matches(/[A-Z]+/, "şifre büyük harf içermelidir.")
    .matches(/[!?.@#$%^&*()-+]+/, "şireniz özel karakter içermelidir."),
});

function TeacherLogin() {
  const initialValues = {
    email: "",
    password: "",

  };
  const navigate = useNavigate()

  const handleSubmit = (values, { resetForm }) => {
    teacherLoginFirebase(values.email,values.password,navigate);
    resetForm();
  };
  return (
    <ForLogin>
      <div className="login-form">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={myValidationSchema}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
          }) => (
            <form className="box" onSubmit={handleSubmit}>
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
                onBlur={handleBlur}
              />
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                type="password"
                helperText={touched.password && errors.password}
                error={touched.password && Boolean(errors.password)}
                onBlur={handleBlur}
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ width: "30%" }}
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </ForLogin>
  );
}

export default TeacherLogin;
