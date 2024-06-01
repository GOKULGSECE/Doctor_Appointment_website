import React, { Component, useEffect, useState } from "react";
import "../styles/appointment.css";

import { useLocation } from "react-router-dom";

const Appointment = (props) => {
  const location = useLocation();
  const arr = location.state;
  useEffect(() => {
    console.log("In Appoinments");
  },arr);
  console.log(props.name);
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <div>
        <header>
          
        </header>
      </div>
    </>
  );
};

export default Appointment;
