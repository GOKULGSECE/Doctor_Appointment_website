import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import 'D:/Doctor_Appointment/FRONTEND/src/styles/LoginStyles.css'
import HomePage from "./HomePage";
import Appointment from "./Appointment";

const Login = () => {
  const navigate = useNavigate();
  const [email,setemail] = useState();
  const [password,setpassword] = useState();
  const onFinishHandler = async (values) => {
    try {
      await axios.post("http://localhost:5006/user/login", values);
        message.success("Login Successful");
        navigate("/homepage");
      } 
     catch (error) {
      message.error("User credentials is wrong");
    }
  };

  return (
      <div className="form-container">
      <Form
        layout=""
        onFinish={onFinishHandler}
        className="register-form"
        
      >
        <h1 className="text-center">Login Form</h1>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please enter your email" }]}>
          <Input type="email" onChange={(value)=>{
            setemail(value.target.value)
          }} />
        </Form.Item>
        
        <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please enter your password" }]}>
          <Input type="password" onChange={(value)=>{
            setpassword(value.target.value)
          }}/>
        </Form.Item>

        <Link to="/register" className="m-2">
          Not a user? Register here
        </Link>

        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
      
    </div>
    
    
  );
};

export default Login;
