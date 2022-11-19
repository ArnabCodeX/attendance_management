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
 function FacultyPasswordDialog(props) {
 const [f_password, setF_password] = useState("");
 const handleAdd = () => {
    axios
    .get(
        "http://localhost:8080/AttendanceManagement/facultyAdd?f_password=" +
        f_password+
        "&f_name="+
        props.f_name
    )
    .then((res) => console.log(res))
    .then(() => setF_password(""))
    .then(() => props.setfopen(false));
 };
 const handleClose = () => {
    setF_password("");
    props.setfopen(false);
 };
 console.log("f_name: ", props.f_name)
 return (
    <div>
    <Dialog
        open={props.fopen}
        sx={{
        "& .MuiPaper-root": {
            maxWidth: "700px",
        },
        }}
    >
        <DialogTitle>{props.f_name}'s Password</DialogTitle>
        <DialogContent>
        <TextField
            variant="outlined"
            value={f_password}
            onChange={(e) => setF_password(e.target.value)}
            label="Password"
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
  
 export default FacultyPasswordDialog;
 
 