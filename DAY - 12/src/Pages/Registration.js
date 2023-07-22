import React, { useState } from 'react';
import "./Registration.css";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Box from '@mui/material/Box';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[age,setAge]=useState('');
  const [gender,setGender]=useState('');
  const[mobileNumber,setMobileNumber]=useState('');
  const [errors, setErrors] = useState({});
  const [currency, setCurrency] = useState('USD');

  const handleAgeChange = (event) => {
    const inputAge = event.target.value;
    setAge(inputAge);

    // Perform age validation logic
    if (inputAge >= 18 && inputAge <= 120) {
      errors.age='You are eligible to proceed.';
    } else {
      errors.age='You age must be greater than 18';
    }
  };
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }
    // setAge(inputAge);
    // if(!age){
    //     errors.age='Age is required';
    // }
    // else if(age>18){

    // }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(password)) {
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
      // Form is valid, perform further actions (e.g., submit data)
      console.log('Form submitted:', { name, age,mobileNumber,email, password });
    }
  };

  return (
    <>
    <div className="main">
    <div className='container'>

    <form onSubmit={handleSubmit}>
    <h3>Welcome onboard!</h3><br></br>
    <p></p>
      <div>
        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
        <br></br>
        {errors.name && <span className="error" style={{color:'red'}}>{errors.name}</span>}
      </div>
      <br></br>

      <div>
        <TextField id="outlined-basic" label="Age" variant="outlined" onChange={handleAgeChange} />
        <br></br>
        {errors.age && <span className="error" style={{color:'red'}}>{errors.age}</span>}
        {/* {validAge ? (<p  style={{color:'green'}}>You are eligible to proceed.</p>) : 
        (<p>You age must be greater than 18</p>)} */}
      </div>

      <div>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
            <FormControlLabel value="male" control={<Radio />} label="Male" 
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}/>
            <FormControlLabel value="female" control={<Radio />} label="Female" 
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}/>
            <FormControlLabel value="other" control={<Radio />} label="Other" 
            checked={gender === 'other'}
            onChange={(e) => setGender(e.target.value)}/>
        </RadioGroup>
    </div>
    <br></br>

    <div>
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" onChange={(e) => setMobileNumber(e.target.value)} />
        <br></br>
        {errors.mobileNumber && <span className="error" style={{color:'red'}}>{errors.mobileNumber}</span>}
    </div>
    <br></br>

    <div>
      <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        {errors.email && <span className="error" style={{color:'red'}}>{errors.email}</span>}
    </div>
    <br></br>
    
    <div>
      <TextField id="outlined-basic" label="Password" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        {errors.password && <span className="error" style={{color:'red'}}>{errors.password}</span>}
    </div>
    <br></br>
    {/* <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ><TextField
    id="outlined-select-currency"
    select
    label="Select"
    defaultValue="EUR"
    helperText="Please select your currency"
    onChange={handleAmountChange}
  >
    {currencies.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))} */}
  {/* </TextField></Box> */}
  <div>
      <label htmlFor="currencySelect">Select Currency:</label>
      <select id="currencySelect" value={currency} onChange={handleCurrencyChange}>
        <option value="USD">USD - US Dollar</option>
        <option value="EUR">EUR - Euro</option>
        <option value="GBP">GBP - British Pound</option>
        <option value="JPY">JPY - Japanese Yen</option>
        {/* Add more currency options as needed */}
      </select>
      <p>Selected Currency: {currency}</p>
    </div>

    <button type="submit">Submit</button>

    </form>
    </div>
    </div>
    </>
  );
};

export default Registration;