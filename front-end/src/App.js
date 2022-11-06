// import logo from './logo.svg';
import "./App.css";
import LogInScreen from "./components/LogInScreen";
// import LogIn from './LogIn';
import Adminboard from "./Adminboard";
import { useState } from "react";
function App() {
  const [isValid, setIsValid] = useState(false);
  return (
    <div className="App">
      {isValid === false ? (
        <LogInScreen isValid={isValid} setIsValid={setIsValid} />
      ) : (
        <Adminboard isValid={isValid} setIsValid={setIsValid} />
      )}
    </div>
  );
}

export default App;
