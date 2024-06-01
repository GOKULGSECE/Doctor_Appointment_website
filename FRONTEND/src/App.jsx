import { BrowserRouter, Route,Routes }   from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Appointment from "./pages/Appointment"
import "antd/dist/reset.css";
import "./index.css";
import { useState } from "react";

function App() {
  const {name,setName} = useState('');
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register setName={setName}/>} />
        <Route path="/homepage" element={<HomePage name = {name} />}/>
        <Route path="/appointment" element={<Appointment setName={setName} />}/>
        <Route path="/" element={<Login />} />
      </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
