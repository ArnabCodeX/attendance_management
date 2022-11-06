import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function StudentAddDialog(props) {
  const [s_name, setS_name] = useState("");
  const handleAdd = () => {
    axios
      .get(
        "http://localhost:8080/AttendanceManagement/studentDetailsAdd?s_name=" +
          s_name
      )
      .then((res) => console.log(res))
      .then(() => setS_name(""))
      .then(() => props.setOpen(false));
  };
  const handleClose = () => {
    setS_name("");
    props.setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={props.open}
        sx={{
          "& .MuiPaper-root": {
            maxWidth: "700px",
          },
        }}
      >
        <DialogTitle>Student Register</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            value={s_name}
            onChange={(e) => setS_name(e.target.value)}
            label="Student Name"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Branch"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Stream"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Roll Number"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Year"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Phone Number"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Pincode"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Father's Name"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Mother's Name"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Gurdian Phone Number"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Add
          </Button>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default StudentAddDialog;
