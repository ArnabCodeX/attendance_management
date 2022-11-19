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
import PasswordDialog from "./PasswordDialog";
 
function StudentAddDialog(props) {
  const [s_name, setS_name] = useState("");
  const [s_Branch, setS_Branch] = useState("");
  const [s_Stream, setS_Stream] = useState("");
  const [s_RollNumber, setS_RollNumber] = useState("");
  const [s_Year, setS_Year] = useState("");
  const [s_PhoneNumber, setS_PhoneNumber] = useState("");
  const [s_PinCode, setS_PinCode] = useState("");
  const [s_FatherName, setS_FatherName] = useState("");
  const [s_MotherName, setS_MotherName] = useState("");
  const [s_GuardianPhoneNumber, setS_GuardianPhoneNumber] = useState("");
  const [popen, setPopen] = useState(false);
  const [s_name_updated, set_s_name_updated] = useState("");
  const handleAdd = () => {
    axios
        
    
    .get(
        "http://localhost:8080/AttendanceManagement/studentDetailsAdd?s_name=" +
          s_name +
          "&s_Branch=" +
          s_Branch +
          "&s_Stream=" +
          s_Stream +
          "&s_RollNumber=" +
          s_RollNumber +
          "&s_Year=" +
          s_Year +
          "&s_PhoneNumber=" +
          s_PhoneNumber +
          "&s_PinCode=" +
          s_PinCode +
          "&s_FatherName=" +
          s_FatherName +
          "&s_MotherName=" +
          s_MotherName +
          "&s_GuardianPhoneNumber=" +
          s_GuardianPhoneNumber
      )
      .then((res) => console.log(res))
      .then(() =>{
        props.setOpen(false)
        setPopen(true)
      })
      .then(() => setS_name(""))
      .then(() => setS_Branch(""))
      .then(() => setS_Stream(""))
      .then(() => setS_RollNumber(""))
      .then(() => setS_Year(""))
      .then(() => setS_PhoneNumber(""))
      .then(() => setS_PinCode(""))
      .then(() => setS_FatherName(""))
      .then(() => setS_MotherName(""))
      .then(() => setS_GuardianPhoneNumber(""))
  };
  const handleClose = () => {
    setS_name("");
    setS_Branch("");
    setS_Stream("");
    setS_RollNumber("");
    setS_Year("");
    setS_PhoneNumber("");
    setS_PinCode("");
    setS_FatherName("");
    setS_MotherName("");
    setS_GuardianPhoneNumber("");

    props.setOpen(false);
  };
  const handleStudentNameChange = (e)=>{
    setS_name(e.target.value)
    set_s_name_updated(e.target.value)
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
        <DialogTitle>Student Register</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            value={s_name}
            onChange={(e) => handleStudentNameChange(e)}
            label="Student Name"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            value={s_Branch}
            onChange={(e) => setS_Branch(e.target.value)}
            label="Branch"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            value={s_Stream}
            onChange={(e) => setS_Stream(e.target.value)}
            label="Stream"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            value={s_RollNumber}
            onChange={(e) => setS_RollNumber(e.target.value)}
            label="Roll Number"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            value={s_Year}
            onChange={(e) => setS_Year(e.target.value)}
            label="Year"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            value={s_PhoneNumber}
            onChange={(e) => setS_PhoneNumber(e.target.value)}
            label="Phone Number"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            value={s_PinCode}
            onChange={(e) => setS_PinCode(e.target.value)}
            label="Pincode"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            value={s_FatherName}
            onChange={(e) => setS_FatherName(e.target.value)}
            label="Father's Name"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            value={s_MotherName}
            onChange={(e) => setS_MotherName(e.target.value)}
            label="Mother's Name"
            style={{ width: "200px", margin: "7px 5px 0 0" }}
          ></TextField>
          <TextField
            variant="outlined"
            value={s_GuardianPhoneNumber}
            onChange={(e) => setS_GuardianPhoneNumber(e.target.value)}
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
      <PasswordDialog popen= {popen} setPopen= {setPopen} s_name = {s_name_updated}/>
    </div>
  );
}
 
export default StudentAddDialog;
 
 

