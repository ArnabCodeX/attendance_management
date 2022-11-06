import React, { useEffect, useState } from 'react'
import { TextField, Paper, Button, Typography } from "@mui/material"
import axios from 'axios'
function LogIn(props) {
  const [userName, setUsername] = useState("");
  const [pword, setPword] = useState("");
  const [data, setData] = useState([]);
  // const [isValid, setIsValid] = useState(false);
  useEffect(()=>{
    axios.get("http://localhost:8080/AttendanceManagement/adminSelect")
    .then(res=>setData(res.data.users))
    // .then(()=>console.log(data))
  }, [])
  const handleClick = ()=>{
    const validate = data.find((ele)=>userName === ele.admin_name && pword === ele.password)
    if(validate !== undefined){
      console.log('proceed')
      document.getElementById("invalid_message").innerHTML = null
      setUsername("");
      setPword("");
      props.setIsValid(true);
    }
    else{
      document.getElementById("invalid_message").innerHTML = "Incorrect User Name or Password"
    }
  }
  return (
    <>
        <Paper elevation={8} sx={{width: '25%', borderRadius: '70px', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', padding: '40px 0'}}>
        <Typography variant='h5' color='primary' sx={{paddingBottom: '10px'}}>Admin Log In</Typography>
        <p id = "invalid_message" style={{color: 'red'}}></p>
        <TextField variant='outlined' value={userName} onChange={(e)=>setUsername(e.target.value)} label='Enter Your Name' sx={{margin:'20px 0'}}></TextField>
        <TextField variant='outlined' value={pword} onChange={(e)=>setPword(e.target.value)} label='Enter Password'></TextField>
        <Button variant='contained' sx={{marginTop:'10px'}} onClick={handleClick}>Submit</Button>
      </Paper>
    </>
    
  )
}

export default LogIn
