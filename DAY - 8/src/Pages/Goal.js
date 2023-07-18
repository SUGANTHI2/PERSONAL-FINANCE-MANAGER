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

               <div className='l1'>
               <TextField id="date" label="Date" variant="standard" /><br></br><br></br><br></br>
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
               <Button variant='contained' style={{backgroundColor:'#2EFFFF',color:'black'}}>ADD</Button>
            </div>

            </center>
       </div>
        </body>   
        
        </>
     );
    }
    
}
export default Goal;