import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Components.css'

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/result?firstName=${firstName}&lastName=${lastName}`);
  };

  return (
    
    
    <div className = "content">
    <form onSubmit={handleSubmit}>
      <label>
        First Name: 
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name: 
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>

  
  );
};

export default Form;
