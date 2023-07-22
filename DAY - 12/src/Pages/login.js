import React, { useState } from 'react';
//import './login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const FormValidationExample = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const errors = {};

    
    if(!email){
        errors.email="Email is required";
    }
    else if(!/\S+@\S+\.\S+/.test(email)){
        errors.email="Invalid Email "
    }
    else{
        errors.email ="";
    }

    if(!password){
        errors.password ="Password is requird";
    }
    else if(password.length<8){
        errors.password="Password length should be greater than 8";
    }
    else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@*$!%?&]{8,}$/.test(password)){
        errors.password="Password should contain one uppercase,lowercase,digit,special character";
    }
    else{
        errors.password="";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Form is valid, perform further actions (e.g., submit data)
      console.log('Form submitted:', { email, password });
    }
  };

  return (
    <div className="d1"><center>
        <h1 className='main'>Login</h1>
        <div className="d2"><br></br>
    <form onSubmit={handleSubmit}>
      <div>
        <TextField required value={email} id="Email" label="Email" input type="email" onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        {errors.email && <span className="error" style={{color:'red'}}>{errors.email}</span>}
      </div>
      <br></br>
      <div>

        <TextField required value={password} id="Password" label="Password" input type="password"  onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        {errors.password && <span className="error" style={{color:'red'}}>{errors.password}</span>}
      </div>
      <br></br>
      <Button className='button'variant='contained' style={{color:'white'}} onClick={handleSubmit}> Submit </Button> <br></br><br></br>    
      </form>
      </div></center>  
        </div>
  );
};

export default FormValidationExample;