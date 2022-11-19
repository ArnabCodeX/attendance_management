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
import FacultyPasswordDialog from "./FacultyPasswordDialog";
 
function FacultyAddDialog(props) {
  const [f_name, setF_name] = useState("");
  const [f_address, setF_address] = useState("");
  const [f_year, setF_year] = useState("");
  const [f_uid, setF_uid] = useState("");
  const [f_phone, setF_phone] = useState("");
  const [f_email, setF_email] = useState("");
  const [f_jyear, setF_jyear] = useState("");
  const [f_hquali, setF_hquali] = useState("");
  const [fopen, setfopen] = useState(false);
  const [f_name_updated, set_f_name_updated] = useState("");
  const handleAdd = () => {
    console.log('opened')
    axios
      .get(
        "http://localhost:8080/AttendanceManagement/facultyDetailsAdd?f_name=" +
        f_name +
          "&f_address=" +
          f_address +
          "&f_year=" +
          f_year +
          "&f_uid=" +
          f_uid +
          "&f_phone=" +
          f_phone +
          "&f_email=" +
          f_email +
          "&f_jyear=" +
          f_jyear +
          "&f_hquali=" +
          f_hquali
          )
      .then((res) => console.log(res))
      .then(() =>{
        props.setOpen(false)
        setfopen(true)
      })
      .then(() => setF_name(""))
      .then(() => setF_address(""))
      .then(() => setF_year(""))
      .then(() => setF_uid(""))
      .then(() => setF_phone(""))
      .then(() => setF_email(""))
      .then(() => setF_jyear(""))
      .then(() => setF_hquali(""))
      
     
  };
  const handleClose = () => {
    setF_name("");
    setF_address("");
    setF_year("");
    setF_uid("");
    setF_phone("");
    setF_email("");
    setF_jyear("");
    setF_hquali("");

    props.setOpen(false);
  };
  const handleFacultyNameChange = (e)=>{
    setF_name(e.target.value)
    set_f_name_updated(e.target.value)
  }
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
        <DialogTitle>Faculty Register</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            value={f_name}
            onChange={(e) => handleFacultyNameChange(e)}
            label="Faculty Name"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            value={f_address}
            onChange={(e) => setF_address(e.target.value)}
            label="Address"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            value={f_year}
            onChange={(e) => setF_year(e.target.value)}
            label="Year"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            value={f_uid}
            onChange={(e) => setF_uid(e.target.value)}
            label="UID"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            value={f_phone}
            onChange={(e) => setF_phone(e.target.value)}
            label="Phone Number"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            value={f_email}
            onChange={(e) => setF_email(e.target.value)}
            label="Email Id"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            value={f_jyear}
            onChange={(e) => setF_jyear(e.target.value)}
            label="Joining Year"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            value={f_hquali}
            onChange={(e) => setF_hquali(e.target.value)}
            label="Highest Qualification"
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
      <FacultyPasswordDialog fopen= {fopen} setfopen= {setfopen} f_name = {f_name_updated}/>
    </div>
  );
}
 
export default FacultyAddDialog; 
 

