import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
 import './Lending.css';
 import {  useNavigate } from 'react-router-dom';
 import axios from 'axios';
//  import { useRef } from 'react';
 import { useUser } from './userContext';
 import { TextField } from '@mui/material';
function Expense(){


    const authToken = localStorage.getItem("authToken")
    const  userEmail  = localStorage.getItem("userEmail");
    const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

    const location = useLocation();
    const user = location.state ? location.state.user : null;
    const data =user;
    console.log(data);
    const [expenseData, setExpenseData] = useState({});
    // const { userEmail } = useUser();
//     const location=useLocation();
//     const  data = location.state;
//   const[expenseData,setExpenseData]=useState({});
// const { userEmail } = useUser();
// const ename=data?data.ename:null;
// console.log("name"+data.ename)
const handleChange=(e)=>{
e.preventDefault();

const {id,value}=e.target;
setExpenseData({...expenseData,[id]:value});
console.log(expenseData);
}
const handleAddExpense= async(e)=>{
    e.preventDefault();
    console.log(userEmail);
    console.log(expenseData);
    try {
    
        // Make the POST request using Axios
        const response = await axios.post(`http://localhost:8080/expense/${userEmail}`, config,expenseData);
    
        // Handle the response if needed
        console.log("Expense added successfully:", response.data);
    
        // Redirect or do any other actions after successful request
      } catch (error) {
        console.error("Error:", error);
        // Handle error if needed
      }
    window.location.reload();
  }
// const handleAddExpense=async()=>{
//     try {
//         console.log(`${userEmail}`)
//       await axios.post(`http://localhost:8080/expense/${userEmail}`, expenseData);
//       // Redirect to the home page with the income amount as a parameter
//       window.location.href = `/home?expenseAmt=${expenseData.expenseAmt}`;
//     } catch (error) {
//       console.log(error);
//     }
// }

const[expense,addExpense]=useState([]);
  useEffect(() => {
      axios.get("http://localhost:8080/expense",config).then(function (response) {
          addExpense(response.data);
        });
}, 
[]);
const navigation = useNavigate();
const deletecontent = (expenseId) => {
    if (window.confirm('Do you want to delete')) {
      axios
        .delete(`http://localhost:8080/expense/${expenseId}`)
        .then((response) => {
          alert('Record Deleted');
          navigation('/Expense');
          window.location.reload(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

// const navRef = useRef();
    
    return ( 
        <>
       <header>
        <div className="mc">
        <nav>
            <h1 style={{fontFamily:'unset' ,color:'#00CED1' ,fontSize:'25px'}}>EXPENSIFY</h1>
            <div >
                <ul  id="navbar" >
                    <li><Link to="/HomePage">Home</Link></li>
                    <li><Link to='/Income'>My Income</Link></li>
                    <li><Link to ='/Expense'>Expense</Link></li>
                    <li><Link to ='/Budget'>Budget</Link></li>
                    <li><Link to ='/Debt'>Debt</Link></li>
                    <li><Link to ='/Goal'>Goal Setting</Link></li>
                </ul>
            </div>
            {/* <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
            </div> */}
        </nav>
        </div>
        </header>
        <body>
                <center>
                <br></br>
                <center>
                <h1>EXPENSE DETAILS</h1>
                </center>
                <br></br>
                <div className='o'>
                    <div className='yu'>
                        <div className='w'>
                        <div className='i1'>
                        <label>AMOUNT</label>
                        </div>
                        <div className='s1'>
                        <TextField id="expenseAmount" onChange={handleChange} label="amount" variant="standard" />
                        </div>
                        </div>
                        <div className='w'>
                        <div className='i2'>
                        <label>SOURCE</label>
                        </div>
                        <div className='s2'>
                        <TextField id="expenseSource" onChange={handleChange} label="source" variant="standard" />
                        </div>
                        </div>
                        <div className="w">
                            <div className="i3">
                                <label>DATE</label>
                            </div>
                            <div className="s3">
                            <input type="date" id="expenseDate" onChange={handleChange}label="Date" variant="standard" />
                            </div>
                        </div>
                        <br></br>
                        <div className='w'>
                        <div className='i5'>
                        <label>DESCRIPTION</label>
                        </div>
                        <div className='s5'>
                        <TextField
                        id="expenseDesc"
                        onChange={handleChange}
                        label="Notes"
                        multiline
                        // rows={}
                        variant="standard"/>
                        </div>
                        </div>
                        <br></br>
                      
                        <button id="bu" onClick={handleAddExpense} style={{color:'black'}}>ADD</button>
                    </div>
                </div>
                </center>
            </body>
            <br></br>
            <br></br>
            <footer>
            <div className='ta'>
                <table>
                    <thead>
                            <th>AMOUNT</th>
                            <th>SOURCE</th>
                            <th>DATE </th>
                            <th>DESCRIPTION </th>
                            <th>ACTION</th>
                    </thead>
                    <tbody>
                        {expense.map((d)=>(
                        <tr>
                            <td>{d.expenseAmount}</td>
                            <td>{d.expenseSource}</td>
                            <td>{d.expenseDate}</td>
                            <td>{d.expenseDesc}</td>
                            <td>

                            <div className='ta'>
                                {/* <button id='one'>View</button> */}
                                <button id='etwo'>EDIT</button>
                                <button onClick={()=>deletecontent(d.expenseId)} id='ethree'>DELETE</button>
                            </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </footer>
        </>
     );
    
    
}
export default Expense;