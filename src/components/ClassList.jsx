import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DeleteClassRoom, useClassRoom } from "../firebase/Database";
import AppContext from "../context/AppContext";
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';
import { onayMesaj } from "../helper/Toastify";

export default function ClassList({ item, index }) {
  const { dataClassRoom } = useClassRoom();
  const { currentTeacher } = React.useContext(AppContext);
  const [filterClass, setFilterClass] = React.useState();
  React.useEffect(() => {
    setFilterClass(
      dataClassRoom?.filter((e) => e.username === currentTeacher.displayName)
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataClassRoom]);

  const handleDeleteClassRoom = (id) => {
    DeleteClassRoom(id)
    onayMesaj("Başarılı bir şekilde silindi")
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="right">Sınıf</TableCell>
            <TableCell align="right">Sil</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterClass?.map((item, index) => {
            return (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } ,transition:"all 0.5s"}}
                key={item.id}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>

                <TableCell align="right">{item.classroom}</TableCell>
                <TableCell align="right"><IconButton color="error" onClick={(e) => handleDeleteClassRoom(item.id)}><CancelIcon/></IconButton></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
