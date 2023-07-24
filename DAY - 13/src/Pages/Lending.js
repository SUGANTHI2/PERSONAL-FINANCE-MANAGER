import React ,{Component}from 'react';
import { Link } from 'react-router-dom';
 import './Lending.css';
 import { TextField } from '@mui/material';
class Lending extends Component{
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return ( 
        <>
       <header>
        <div className="mc">
        <nav>
            <h1 style={{fontFamily:'unset' ,color:'#00CED1' ,fontSize:'25px'}}>EXPENSIFY</h1>
            <div >
                <ul  id="navbar" className={this.state.clicked?"#navbar active":"navbar"}>
                    <li><Link to="/HomePage">Home</Link></li>
                    <li><Link to='/Income'>My Income</Link></li>
                    <li><Link to ='/Expense'>Expense</Link></li>
                    <li><Link to ='/Budget'>Budget</Link></li>
                    <li><Link to ='/Debt'>Debt</Link></li>
                    <li><Link to ='/Goal'>Goal Setting</Link></li>
                </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
            </div>
        </nav>
        </div>
        </header>
        <body>
                <center>
                <br></br>
                <center>
                <h1>LENDING</h1>
                </center>
                <br></br>
                <div className='o'>
                    <div className='yu'>
                        <div className='w'>
                        <div className='i1'>
                        <label>NAME</label>
                        </div>
                        <div className='s1'>
                        <TextField id="standard-basic" label="name" variant="standard" />
                        </div>
                        </div>
                        <div className='w'>
                        <div className='i2'>
                        <label>AMOUNT</label>
                        </div>
                        <div className='s2'>
                        <TextField id="standard-basic" label="amount" variant="standard" />
                        </div>
                        </div>
                        <div className="w">
                            <div className="i3">
                                <label>DATE</label>
                            </div>
                            <div className="s3">
                                <TextField
                                // onChange{(e)=>setDob(event.target.value)}
                                name="dob" 
                                id="dob" type="date" value="dob" variant="standard"></TextField>
                            </div>
                        </div>
                        <div className="w">
                            <div className="i4">
                                <label>DUE DATE</label>
                            </div>
                            <div className="s4">
                                <TextField
                                // onChange{(e)=>setDob(event.target.value)}
                                name="dob" 
                                id="dob" type="date" value="dob" variant="standard"></TextField>
                            </div>
                        </div>
                        <br></br>
                        <div className='w'>
                        <div className='i5'>
                        <label>NOTES</label>
                        </div>
                        <div className='s5'>
                        <TextField
                        id="standard-multiline-static"
                        label="Notes"
                        multiline
                        // rows={}
                        variant="standard"/>
                        </div>
                        </div>
                        <br></br>
                      
                        <Link to='/HomePage'><button id="bu" >ADD</button></Link>
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
                            <th>NAME</th>
                            <th>AMOUNT</th>
                            <th>DATE </th>
                            <th>DUE DATE </th>
                            <th>NOTES</th>
                            <th>ACTION</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sugan</td>
                            <td>1000</td>
                            <td>2023-07-22</td>
                            <td>2023-07-22</td>
                            <td>Some notes here</td>
                            <td>

                            <div className='ta'>
                                {/* <button id='one'>View</button> */}
                                <button id='ltwo'>EDIT</button>
                                <button id='lthree'>DELETE</button>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </footer>
        </>
     );
    }
    
}
export default Lending;