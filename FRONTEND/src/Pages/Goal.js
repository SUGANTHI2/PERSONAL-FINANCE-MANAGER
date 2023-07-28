import React ,{Component}from 'react';
import { Link } from 'react-router-dom';
 import './Goal.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
class Goal extends Component{
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
                <ul  id="navbar" >
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
       <div className="bd2">
        <center>
            <h4>GOAL SETTING AND TRACKING</h4>
            <div className='bd3'>

               <div className='l'>
               <label>TARGET AMOUNT:</label>
               </div>
               
               <div className='l1'>
               <TextField id="number" label="Target Amount" variant="standard" /><br></br><br></br><br></br>
               </div>

               <div className='l'>
               <label>SAVED AMOUNT:</label>
               </div>

               <div className='l1'>
               <TextField id="number" label="Saved Amount" variant="standard" /><br></br><br></br><br></br>
               </div>

               <div className='l'>
               <label>DATE:</label>
               </div>

               <div className='d'>
               <input type="date" label="Date" variant="standard" /><br></br><br></br><br></br>
               </div>

               <div className='l'>
               <label>SOURCE:</label>
               </div>

               <div className='l1'>
               <TextField id="source" label="Source" variant="standard" /><br></br><br></br><br></br>
               </div>
               <div className='l'>
               <label>DESCRIPTION:</label>
               </div>

               <div className='l1'>
               <TextField id="desc" label="Description" variant="standard" /><br></br><br></br><br></br>
               </div>

               <br></br>
               <Button variant='contained' style={{backgroundColor:'#2EFFFF',color:'black',border: '2px solid black'}}>ADD</Button>
            </div>

            </center>
       </div>
        </body>  
        <br></br>
        <br></br>
      
        
        <footer>
        <div className='ta'>
                <table>
                    <thead>
                            <th>TARGET AMOUNT</th>
                            <th>SAVED AMOUNT</th>
                            <th>DATE</th>
                            <th>SOURCE</th>
                            <th>DESCRIPTION </th>
                            <th>ACTION</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>100</td>
                            <td>Example Source</td>
                            <td>2023-07-22</td>
                            <td>Some notes here</td>
                            <td>Description</td>
                            <td>

                            <div className='ta'>
                                {/* <button id='one'>View</button> */}
                                <button id='gtwo'>EDIT</button>
                                <button id='gthree'>DELETE</button>
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
export default Goal;