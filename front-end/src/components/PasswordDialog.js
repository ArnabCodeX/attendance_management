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
 function PasswordDialog(props) {
 const [s_password, setS_password] = useState("");
 const handleAdd = () => {
    axios
    .get(
        "http://localhost:8080/AttendanceManagement/studentAdd?s_password=" +
        s_password+
        "&s_name="+
        props.s_name
    )
    .then((res) => console.log(res))
    .then(() => setS_password(""))
    .then(() => props.setPopen(false));
 };
 const handleClose = () => {
    setS_password("");
    props.setPopen(false);
 };
 console.log("s_name: ", props.s_name)
 return (
    <div>
    <Dialog
        open={props.popen}
        sx={{
        "& .MuiPaper-root": {
            maxWidth: "700px",
        },
        }}
    >
        <DialogTitle>{props.s_name}'s Password</DialogTitle>
        <DialogContent>
        <TextField
            variant="outlined"
            value={s_password}
            onChange={(e) => setS_password(e.target.value)}
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
  
 export default PasswordDialog;
 
 