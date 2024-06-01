import React, { useState } from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
 const [email,setEmail] = useState();  
 const [password,setPassword] = useState();  
 const [name,setname] = useState();                 

  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("http://localhost:5006/user/register", {
        name : name,
        email : email,
        password:password
      });
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      message.error("Something Went Wrong");
    }
  };

  return (
    <>
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register form</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required onChange={(value)=>{
              setname(value.target.value);
            }} />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required  onChange={(value)=>{
              setEmail(value.target.value);
            }}/>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required onChange={(value)=>{
              setPassword(value.target.value);
            }}/>
          </Form.Item>
          <Link to="/" className="m-2">
            Already an user? 
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;
