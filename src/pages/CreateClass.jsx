import React from "react";
import AddClassRoom from "../components/AddClassRoom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
function CreateClass() {
  return (
    <div>
      <Container maxWidth="md">
        <Box sx={{height: "100vh",margin:"2rem" }}>
          <AddClassRoom />
        </Box>
      </Container>
    </div>
  );
}

export default CreateClass;
