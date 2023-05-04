import React from "react";
import { useLocation } from "react-router-dom";
import './Components.css'

const Result = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const firstName = params.get("firstName");
  const lastName = params.get("lastName");

  return (
    
    <>
    <div className="content">
      <h3>Result</h3>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
    </div>
    
    </>
  );
};


    


export default Result;
