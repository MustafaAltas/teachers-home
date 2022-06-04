import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from '@mui/material';
import { onayMesaj } from "../helper/Toastify";
import ArticleIcon from '@mui/icons-material/Article';
import Tooltip from '@mui/material/Tooltip';


export default function ShowStudentListTable({ studentList2 }) {

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="right">Sınıf</TableCell>
            <TableCell align="right">Sınıf</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...studentList2]?.map((item, index) => {
            return (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } ,transition:"all 0.5s"}}
                key={item.id}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>

                <TableCell align="right">{item.fullname}</TableCell>
                <TableCell align="right"><Tooltip title="Not ver"><IconButton color="primary"><ArticleIcon/></IconButton></Tooltip></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
