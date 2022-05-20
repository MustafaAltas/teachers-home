import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import {  teacherRegister } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";

const ForLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 40vw;
    min-width: 450px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
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
  firstname: Yup.string()
    .required("Boş Bırakılmaz")
    .min(2, "Çok Kısa")
    .max(15, "Çok uzun"),
  lastname: Yup.string()
    .required("Boş Bırakılmaz")
    .min(2, "Çok Kısa")
    .max(15, "Çok uzun"),
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
  password2: Yup.string()
    .required("Şifre Girmeniz gerekmektedir.")
    .min(8, "Çok kısa/ En az 8 karakter giriniz.")
    .oneOf([Yup.ref("password"), null], "Girdiğiniz şifre eşleşmedi."),
});

function TeacherRegister() {
  const navigate = useNavigate();
  
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  };



  const handleSubmit = (values, { resetForm }) => {
    const isimSoyisim = `${
      values.firstname.charAt(0).toUpperCase() + values.firstname.slice(1)
    } ${values.lastname.charAt(0).toUpperCase() + values.lastname.slice(1)}`;
    teacherRegister(values.email, values.password, isimSoyisim, navigate);

    resetForm();
  };
  console.log(initialValues);





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
                name="firstname"
                label="First Name"
                variant="outlined"
                value={values.firstname}
                onChange={handleChange}
                helperText={touched.firstname && errors.firstname}
                error={touched.firstname && Boolean(errors.firstname)}
                onBlur={handleBlur}
              />
              <TextField
                name="lastname"
                label="Last Name"
                variant="outlined"
                value={values.lastname}
                onChange={handleChange}
                helperText={touched.lastname && errors.lastname}
                error={touched.lastname && Boolean(errors.lastname)}
                onBlur={handleBlur}
              />
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
              <TextField
                name="password2"
                label="Password"
                variant="outlined"
                value={values.password2}
                onChange={handleChange}
                type="password"
                helperText={touched.password2 && errors.password2}
                error={touched.password2 && Boolean(errors.password2)}
                onBlur={handleBlur}
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ width: "200px" }}
                  type="submit"
                >
                  Register
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </ForLogin>
  );
}

export default TeacherRegister;
