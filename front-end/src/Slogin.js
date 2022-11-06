import React, { useEffect, useState } from 'react'
import { TextField, Paper, Button, Typography } from "@mui/material"
import axios from 'axios'
function SLogIn(props) {
  const [studentName, setStudentname] = useState("");
  const [spword, setSpword] = useState("");
  const [student, setStudent] = useState([]);
  // const [isValid, setIsValid] = useState(false);
  useEffect(()=>{
    axios.get("http://localhost:8080/AttendanceManagement/studentSelect")
    .then(res=>setStudent(res.data.s_users))
    .then(()=>console.log(student))
  }, [])
  const handleClick = ()=>{
    const validate = student.find((ele)=>studentName === ele.s_name && spword === ele.s_password)
    if(validate !== undefined){
      console.log('proceed')
      document.getElementById("invalid_message").innerHTML = null
      setStudentname("");
      setSpword("");
      props.setIsValid(true);
    }
    else{
      document.getElementById("invalid_message").innerHTML = "Incorrect User Name or Password"
    }
  }
  return (
    // <div style={{display:'flex', justifyContent: 'center', alignItems:'center', height: '657px', backgroundColor: '#f1eded'}}>
    <>
  
      <Paper elevation={8} sx={{width: '25%', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', padding: '40px 0', borderRadius: '70px'}}>
        <Typography variant='h5' color='primary' sx={{paddingBottom: '10px'}}>Student Log In</Typography>
        <p id = "invalid_message" style={{color: 'red'}}></p>
        <TextField variant='outlined' onChange={(e)=>setStudentname(e.target.value)} label='Enter Your Name' sx={{margin:'20px 0'}}></TextField>
        <TextField variant='outlined' onChange={(e)=>setSpword(e.target.value)} label='Enter Password'></TextField>
        <Button variant='contained' sx={{marginTop:'10px'}} onClick={handleClick}>Submit</Button>
      </Paper>
    
    </>
    
  )
}

export default SLogIn
