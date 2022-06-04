import React, { useContext,useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { addStudent, useClassRoom } from "../firebase/Database";
import ShowStudentList from "../components/ShowStudentList";
import AppContext from "../context/AppContext";
import { onayMesaj } from "../helper/Toastify";

const ForLogin = styled.div`
  padding: 5rem;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
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
  number: Yup.number()
    .required("Numara Girmeniz gerekmektedir.")
    .min(8, "Çok kısa/ En az 8 karakter giriniz."),
  classroom: Yup.string().nullable().required("Sınıf Girmeniz gerekmektedir."),
});

function CreateStudent() {
  // const navigate = useNavigate();
  const { dataClassRoom } = useClassRoom();
  // const { students } = useStudentData();
  const { currentTeacher } = useContext(AppContext);
  const [updateControl,setUpdateControl] = useState()
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    classroom: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const isimSoyisim = `${
      values.firstname.charAt(0).toUpperCase() + values.firstname.slice(1)
    } ${values.lastname.charAt(0).toUpperCase() + values.lastname.slice(1)}`;
    addStudent(
      values.classroom,
      isimSoyisim,
      values.email,
      values.number,
      currentTeacher.uid
    );
    setUpdateControl(!updateControl);
    onayMesaj("Öğrenci başarılı bir şekilde kaydedildi.")
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
              <InputLabel id="demo-simple-select-helper-label">
                ClassRoom
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="classroom"
                value={values.classroom}
                label="Sınıf"
                onChange={handleChange}
                sx={{ m: 1, minWidth: 210 }}
                helperText={touched.select && errors.select}
                error={touched.select && Boolean(errors.select)}
                onBlur={handleBlur}
              >
                {dataClassRoom
                  ?.filter((e) => e.username === currentTeacher.displayName)
                  .map((item) => {
                    return (
                      <MenuItem value={item.classroom} key={item.id}>
                        {item.classroom}
                      </MenuItem>
                    );
                  })}
              </Select>
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
                name="number"
                label="Number"
                variant="outlined"
                value={values.number}
                onChange={handleChange}
                type="number"
                helperText={touched.number && errors.number}
                error={touched.number && Boolean(errors.number)}
                onBlur={handleBlur}
              />

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ width: "200px" }}
                  type="submit"
                >
                  Kayıt
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <ShowStudentList updateControl={updateControl}/>
    </ForLogin>
  );
}

export default CreateStudent;
