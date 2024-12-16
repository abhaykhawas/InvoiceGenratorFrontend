import { Routes, Route } from "react-router-dom"
import './App.css';
import Dashboard from "./Pages/Dashboard";
import Login from './Pages/Login';
import Signup from './Pages/Signup';


function App() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/signup" element={ <Signup/> }/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
