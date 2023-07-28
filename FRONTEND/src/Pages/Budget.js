import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
 import './Budget.css';
 import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Budget(){
    const navigation = useNavigate();
    
    const[budgetData,setBudgetData]=useState({});
  const handleChange=(e)=>{
    e.preventDefault();
    const {id,value}=e.target;
    setBudgetData({...budgetData,[id]:value});
    console.log(budgetData);
  }
  const[budget,addBudget]=useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/budget`).then(function (response) {
          addBudget(response.data);
        });
      }, []);
const handleAddBudget=()=>{
    axios.post(`http://localhost:8080/budget`,budgetData)
    window.location.reload();
  }
  const deletecontent = (budgetId) => {
    if (window.confirm('Do you want to delete')) {
      axios
        .delete(`http://localhost:8080/budget/delete/${budgetId}`)
        .then((response) => {
          alert('Record Deleted');
          navigation('/Budget');
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
                <ul  id="navbar">
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
       <div className="bd2">
        <center>
            <h4>POCKET BOOK</h4>
            <div className='bd'>

               <div className='l'>
               <label>AMOUNT</label>
               </div>
               
               <div className='l1'>
               <TextField id="budgetAmt" onChange={handleChange} label="Amount" variant="standard" /><br></br><br></br><br></br>
               </div>

               <div className='l'>
               <label>DESCRIPTION</label>
               </div>

               <div className='l1'>
               <TextField id="budgetSource" onChange={handleChange} label="Description" variant="standard" /><br></br><br></br><br></br>
               </div>
               <br></br>
               <Button variant='contained' onClick={handleAddBudget}style={{ backgroundColor: '#2EFFFF', color: 'black', border: '2px solid black' }}>
      ADD
    </Button>
            </div>

            </center>
            <br></br>
            <br></br>
        <div className='ta'>
                <table>
                    <thead>
                            <th>AMOUNT</th>
                            <th>DESCRIPTION</th>
                            <th>ACTION</th>
                    </thead>
                    <tbody>
                        {budget.map((d)=>(
                        <tr>
                            <td>{d.budgetAmt}</td>
                            <td>{d.budgetSource}</td>
                            {/* <td>2023-07-22</td> */}
                            <td>

                            <div className='ta'>
                                <button id='btwo'>EDIT</button>
                                <button onClick={()=>deletecontent(d.budgetId)}id='bthree'>DELETE</button>
                            </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>
    
       </div>
        </body>   
        </>
     );
    }
    

export default Budget;