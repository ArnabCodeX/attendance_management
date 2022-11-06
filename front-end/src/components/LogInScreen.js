import { FormControl, Radio, RadioGroup, FormControlLabel } from '@mui/material'
import React, {  useState } from 'react'
import FLogIn from '../Flogin'
import LogIn from '../LogIn'
import SLogIn from '../Slogin'

function LogInScreen(props) {
    //const [value, setValue] = useState(true);
    // const handleChange = (e) =>{
    //     setValue(e.target.value);
    //     // console.log(value);
    // }
    const [isStudent, setIsStudent] = useState(true)
    const [isFaculty, setIsFaculty] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    function handleStudent(){
        setIsStudent(true)
        setIsFaculty(false)
        setIsAdmin(false)
    }
    function handleFaculty(){
        setIsStudent(false)
        setIsFaculty(true)
        setIsAdmin(false)
    }
    function handleAdmin(){
        setIsStudent(false)
        setIsFaculty(false)
        setIsAdmin(true)
    }
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', height: '657px', backgroundColor: '#f1eded'}}>
      <FormControl>
      <RadioGroup row  >
       <FormControlLabel checked={isStudent} value={1} control={<Radio />} label="Student" onClick={handleStudent}/>
        <FormControlLabel checked={isFaculty} control={<Radio />} label="Faculty" onClick={handleFaculty}/>
        <FormControlLabel checked={isAdmin} control={<Radio />} label="Admin" onClick={handleAdmin}/>
      </RadioGroup>
      </FormControl>
      {/* <Button onClick={(prev)=>setValue(prev+1)}>Click</Button> */}
      {isStudent === true && <SLogIn isValid={props.isValid} setIsValid = {props.setIsValid}/>}
      {isFaculty === true && <FLogIn isValid={props.isValid} setIsValid = {props.setIsValid}/>}
      {isAdmin === true && <LogIn isValid={props.isValid} setIsValid = {props.setIsValid}/>}
    </div>
  )
}

export default LogInScreen
