// import logo from './logo.svg';
import "./App.css";
import LogInScreen from "./components/LogInScreen";
// import LogIn from './LogIn';
import Adminboard from "./Adminboard";
import { useState } from "react";
function App() {
  const [isAdminValid, setIsAdminValid] = useState(false);
  const [isStudentValid, setIsStudentValid] = useState(false);
  const [isFacultyValid, setIsFacultyValid] = useState(false);
  return (
    <div className="App">
      {isAdminValid === false ? (
        <LogInScreen isAdminValid={isAdminValid} setIsAdminValid={setIsAdminValid} isStudentValid = {isStudentValid}
        setIsStudentValid = {setIsStudentValid} isFacultyValid={isFacultyValid}  setIsFacultyValid={setIsFacultyValid}/>
      ) : (
        <Adminboard isValid={isAdminValid} setIsValid={setIsAdminValid} />
      )}
    </div>
  );
}

export default App;
