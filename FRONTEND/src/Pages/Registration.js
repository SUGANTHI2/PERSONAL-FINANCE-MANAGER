import React ,{useState}from 'react';
import './Registration.css';
 import axios from 'axios';

 import { login } from '../Features/User';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import UserAuthService from '../services/userAuthService';
import { SignUpSchema } from './schema/registerSchema';
// import { SignUpSchema } from './schema/registerSchema';
import {useDispatch} from 'react-redux';
//  import userAuthService from '../services/userAuthService';
const Registration= () =>{

 const navigate =useNavigate();
  const initialState = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventRegister();
        action.resetForm();
      }
    })
    const eventRegister = async () => {
      try {
        
          const response = await UserAuthService.saveUser(values);
          console.log(response);
          const target = "Error";
          const target1 = "Email Already Exists !!";
          if (response.data === target) {
            throw target;
          } else if (response.data === target1) {
            throw target1;
          }
          else {
            setTimeout(() => {
              navigate("/");
            }, 100);
        }
      }
      catch (error) {
        console.log(errors);
      }
    };
  
  
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const[confirmPassword,setConfirmPassword]=useState('');
  // const[loading,setLoading]=useState(false);
  // const [errors, setErrors] = useState({});
  // const navigate = useNavigate();
  // const dispatch=useDispatch();

//   const handleNext=()=>{
//     dispatch(login({email}));navigate("/HomePage")
//   }
//   const dispatch=useDispatch();
//   const validateForm = () => {
//     const errors = {};

//     if (!name) {
//       errors.name = 'Name is required';
//     }

//     if (!email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = 'Invalid email address';
//     }

//     if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$*!%?&]{8,}$/.test(password)) {
//       errors.password = 'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.';
//     } else if (!password) {
//       errors.password = 'Password required';
//     }

//     if (!confirmPassword) {
//       errors.confirmPassword = 'Confirm Password is required';
//     } else if (password !== confirmPassword) {
//       errors.confirmPassword = 'Passwords do not match';
//     }
 
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   async function handleSubmit (event) {
//     event.preventDefault();
//     setLoading(true);
//     if (validateForm()) {
//       handleNext();
//     }
//     try{
//       const data={
//         userName:name,
//         // last_name:lastName,
//         email:email,
//         // city:city,
//         password:password
//         // mobile_no:phone
//       };
//       const response = await axios.post('http://localhost:8080/auth/register', data).then(response=>{console.log(response.data)});
// console.log('Registration successful:', response.data);

//         dispatch(login({ email }));
//         navigate('/HomePage');
//         } catch (error) {
//         console.error('API request error:', error);
//         }


// };

  return (
    <>
      <div className="main1">
        <div className="container1">
          <form onSubmit={handleSubmit}>
            <h3>REGISTER HERE!!!</h3>

            <div>
              <TextField  required id="userName" label="Name" variant="outlined" value={values.userName}
                onBlur={handleBlur}
                onChange={handleChange} />
              <br></br>
              {errors.userName && touched.userName?(<span className="error" style={{color:'red'}}>{errors.userName}</span>):null}
            </div>
            <br></br>

            <div>
              <TextField required id="email" label="email" variant="outlined" value={values.email}
                onBlur={handleBlur}
                onChange={handleChange} />
              <br></br>
              {errors.email && touched.email?(<span className="error" style={{color:'red'}}>{errors.email}</span>):null}
            </div>
            <br></br>

            <div>
              <TextField required id="password" label="password" variant="outlined" type="password" value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}/>
              <br></br>
              {errors.password && touched.password?(<span className="error" style={{color:'red'}}>{errors.password}</span>):null}
            </div>
            <br></br>
            <div>
              <TextField required id="confirmPassword" label="confirmPassword" variant="outlined" type="password" value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}/>
              <br></br>
              {errors.confirmPassword && touched.confirmPassword?( <span className='error' style={{color:'red'}}>{errors.confirmPassword}</span>):null} 
            </div>
            <br></br>

           
            <Button className="button" variant="contained" style={{ color: 'white' }} onClick={handleSubmit} >
              REGISTER
            </Button>
          
            <br></br>
            <br></br>
            <Link to="/">Already have an account? Login here</Link>
          </form>
        </div>
      </div>
    </>
  );
};
export default Registration;