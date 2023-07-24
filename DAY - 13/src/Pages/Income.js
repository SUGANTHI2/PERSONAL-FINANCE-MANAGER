import React ,{useState}from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
 import './Lending.css';
 import {  useNavigate } from 'react-router-dom';
 import { TextField } from '@mui/material';
 import axios from 'axios';
function  Income (){
    const navigation = useNavigate();
    const[incomeData,setIncomeData]=useState({});
  const handleChange=(e)=>{
    e.preventDefault();
    const {id,value}=e.target;
    setIncomeData({...incomeData,[id]:value});
    console.log(incomeData);
  }
  const[income,addIncome]=useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/income`).then(function (response) {
          addIncome(response.data);
        });
      }, []);
    // const handleAddIncome=async()=>{
    //     try {
    //         // Make a POST request to your backend API to save the income data
    //         const response = await axios.post("http://localhost:8080/income", incomeData);
      
    //         // Assuming your backend API responds with a success message or the created income object, you can handle the response as needed.
    //         console.log("Income added:", response.data);
      
    //         // Refresh the page after successful addition
    //         window.location.reload();
    //       } catch (error) {
    //         console.error("Error adding income:", error);
    //         // Handle error if needed
    //       }
      
    //     // axios.post("http://localhost:8080/income",incomeData)
    //     // window.location.reload();
    //     };

    const handleAddIncome=()=>{
        axios.post(`http://localhost:8080/income`,incomeData)
        window.location.reload();
      }
      const deletecontent = (incomeId) => {
        if (window.confirm('Do you want to delete')) {
          axios
            .delete(`http://localhost:8080/income/${incomeId}`)
            .then((response) => {
              alert('Record Deleted');
              navigation('/Income');
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
                    <li><Link to ='/Report'>Report</Link></li>
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
                <h1>INCOME DETAILS</h1>
                </center>
                <br></br>
                <div className='o'>
                    <div className='yu'>
                        <div className='w'>
                        <div className='i1'>
                        <label>AMOUNT</label>
                        </div>
                        <div className='s1'>
                        <TextField id="incomeAmount" label="amount"onChange={handleChange} variant="standard" />
                        </div>
                        </div>
                        <div className='w'>
                        <div className='i2'>
                        <label>SOURCE</label>
                        </div>
                        <div className='s2'>
                        <TextField id="incomeSource" label="source"onChange={handleChange} variant="standard" />
                        </div>
                        </div>
                        <div className="w">
                            <div className="i3">
                                <label>DATE</label>
                            </div>
                            <div className="s3">
                            <input type="date" id="incomeDate" onChange={handleChange}label="Date" variant="standard" />
                            </div>
                        </div>
                        <br></br>
                        <div className='w'>
                        <div className='i5'>
                        <label>DESCRIPTION</label>
                        </div>
                        <div className='s5'>
                        <TextField
                        id="incomeDesc"
                        label="Notes" onChange={handleChange}
                        multiline
                        // rows={}
                        variant="standard"/>
                        </div>
                        </div>
                        <br></br>
                      
                        <button id="bu" onClick={handleAddIncome} style={{color:'black'}}>ADD</button>
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
                        {income.map((d)=>(
                        <tr>
                            <td>{d.incomeAmount}</td>
                            <td>{d.incomeSource}</td>
                            <td>{d.incomeDate}</td>
                            <td>{d.incomeDesc}</td>
                            <td>

                            <div className='ta'>
                                {/* <button id='one'>View</button> */}
                                <button id='itwo'>EDIT</button>
                               <button onClick={()=>deletecontent(d.incomeId)} id='ithree'>DELETE</button>
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
    
        
export default Income;