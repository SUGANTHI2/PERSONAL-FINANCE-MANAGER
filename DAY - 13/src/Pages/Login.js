import React, { useState } from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import { SignInSchema } from './schema/loginSchema';
// import { SignInSchema } from './schema/loginSchema';
import UserAuthService from '../services/userAuthService';
import { useDispatch } from 'react-redux';
import {addEmails,addToken} from './store/reducer'
// import { addEmails,addToken } from './Stores/masterSlice';
import { Login, login } from '../Features/User';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FormValidationExample = () =>  {
  const dispatch=useDispatch();
  const initialState = {
    email: "",
    password: "",
  };
  const { values, errors,  handleBlur, handleChange,handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignInSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventLogin();
        action.resetForm();
      }
    })

  const eventLogin = async () => {
    try {
      const response = await UserAuthService.loginUserWithEmailAndPassword(values);
      console.log(response);
      var token = response.data.accessToken;
      var userEmail = response.data.email;

      if (response.message != "Request failed with status code 400") {
        setTimeout(() => {
          dispatch(addEmails(userEmail));
          dispatch(addToken(token));
          navigate("/HomePage");
        }, 1000);
      }
      else {
        <h1>Login failed:(</h1>
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="d1">
      <center>
        <br></br>
        <br></br>
        <br></br>
        <div className="d2">
          <div className="d3">
            <br></br>
            <br></br>
            <h1 className="main2">Login</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
                  required
                  // value={email}
                  id="email"
                  value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
                  label="Email"
                  type="email"
                  
                />
                <br></br>
                {errors.email && touched.email?(<span className="error" style={{ color: 'red' }}>{errors.email}</span>):null}
              </div>
              <br></br>
              <div>
                <TextField
                  required
                  value={values.password}
                  id="password"
                  label="Password"
                  type="password"
            onChange={handleChange}
            onBlur={handleBlur}
                />
                <br></br>
                {errors.password && touched.password?(<span className="error" style={{ color: 'red' }}>{errors.password}</span>):null}
              </div>
              <br></br>
              <Button className="button" variant="contained" style={{ color: 'white' }} onClick={handleSubmit}>
                Login!
              </Button>{' '}
              <br></br>
              <br></br>
              <br></br>
              <Link to="/Registration" style={{ color: 'blue' }}>
                New User? Register
              </Link>
            </form>
          </div>
        </div>
      </center>
    </div>
  );
};

export default FormValidationExample;
