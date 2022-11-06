import React, { useEffect, useState } from 'react'
import { TextField, Paper, Button, Typography } from "@mui/material"
import axios from 'axios'
function FLogIn(props) {
  const [facultyName, setFacultyname] = useState("");
  const [fpword, setFpword] = useState("");
  const [faculty, setFaculty] = useState([]);
  // const [isValid, setIsValid] = useState(false);
  useEffect(()=>{
    axios.get("http://localhost:8080/AttendanceManagement/facultySelect")
    .then(res=>setFaculty(res.data.f_users))
    .then(()=>console.log(faculty))
  }, [])
  const handleClick = ()=>{
    const validate = faculty.find((ele)=>facultyName === ele.f_name && fpword === ele.f_password)
    if(validate !== undefined){
      console.log('proceed')
      document.getElementById("invalid_message").innerHTML = null
      setFacultyname("");
      setFpword("");
      props.setIsValid(true);
    }
    else{
      document.getElementById("invalid_message").innerHTML = "Incorrect User Name or Password"
    }
  }
  return (
    <>

      <Paper elevation={8} sx={{width: '25%', borderRadius: '70px', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', padding: '40px 0'}}>
        <Typography variant='h5' color='primary' sx={{paddingBottom: '10px'}}>Faculty Log In</Typography>
        <p id = "invalid_message" style={{color: 'red'}}></p>
        <TextField variant='outlined' onChange={(e)=>setFacultyname(e.target.value)} label='Enter Your Name' sx={{margin:'20px 0'}}></TextField>
        <TextField variant='outlined' onChange={(e)=>setFpword(e.target.value)} label='Enter Password'></TextField>
        <Button variant='contained' sx={{marginTop:'10px'}} onClick={handleClick}>Submit</Button>
      </Paper>

    
    </>
  )
}

export default FLogIn
