import React, { useState } from 'react';
import "./Registration.css";
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Box from '@mui/material/Box';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[age,setAge]=useState('');
  const[mobileNumber,setMobileNumber]=useState('');
  const [errors, setErrors] = useState({});
 

  const handleAgeChange = (event) => {
    const inputAge = event.target.value;
    setAge(inputAge);

    
    if (inputAge >= 18 && inputAge <= 120) {
      errors.age='You are eligible to proceed.';
    } else {
      errors.age='You age must be greater than 18';
    }
  };


  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }
 
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$*!%?&]{8,}$/.test(password)) {
      errors.password='Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.';
    } else if(!password) {
      errors.password='Password required';
    }

    if(!mobileNumber){
        errors.mobileNumber='Phone number is required';
    }
    else if(!/^\d{10}$/.test(mobileNumber)){
        errors.mobileNumber='Invalid phone number';   
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      
      console.log('Form submitted:', { name, age,mobileNumber,email, password });
    }
  };

  return (
    <>
    <div className="main1">
    <div className='container1'>
    <form onSubmit={handleSubmit}>
    <h3>REGISTER HERE!!!</h3>
    
      <div>
        <TextField required id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
        <br></br>
        {errors.name && <span className="error" style={{color:'red'}}>{errors.name}</span>}
      </div>
      <br></br>

      <div>
        <TextField required id="outlined-basic" label="Age" variant="outlined" onChange={handleAgeChange} />
        <br></br>
        {errors.age && <span className="error" style={{color:'red'}}>{errors.age}</span>}
      </div>
      
    <br></br>

    <div>
      <TextField required id="outlined-basic" label="Phone Number" variant="outlined"  onChange={(e) => setMobileNumber(e.target.value)} />
        <br></br>
        {errors.mobileNumber && <span className="error" style={{color:'red'}}>{errors.mobileNumber}</span>}
    </div>
    <br></br>

    <div>
      <TextField required id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        {errors.email && <span className="error" style={{color:'red'}}>{errors.email}</span>}
    </div>
    <br></br>
    
    <div>
      <TextField required id="outlined-basic" label="Password" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        {errors.password && <span className="error" style={{color:'red'}}>{errors.password}</span>}
    </div>
    <br></br>
   
 
    <Button className='button'variant='contained' style={{color:'white'}}><Link to='/HomePage'>Submit</Link></Button><br></br>
    <br></br>
    <Link to='/'>Already have an account? Login here</Link>
    </form>
    </div>
    </div>
    </>
  );
};

export default Registration;