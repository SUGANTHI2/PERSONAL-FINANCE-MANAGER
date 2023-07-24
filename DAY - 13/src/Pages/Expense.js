import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
 import './Lending.css';
 import {  useNavigate } from 'react-router-dom';
 import axios from 'axios';
 import { TextField } from '@mui/material';
function Expense(){
    const navigation = useNavigate();
    const[expenseData,setExpenseData]=useState({});
  const handleChange=(e)=>{
    e.preventDefault();
    const {id,value}=e.target;
    setExpenseData({...expenseData,[id]:value});
    console.log(expenseData);
  }
  const[expense,addExpense]=useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/expense`).then(function (response) {
          addExpense(response.data);
        });
      }, []);
      const handleAddExpense=()=>{
        axios.post(`http://localhost:8080/expense`,expenseData)
        window.location.reload();
      }
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