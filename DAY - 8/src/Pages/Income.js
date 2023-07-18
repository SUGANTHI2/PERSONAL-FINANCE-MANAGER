import React ,{Component}from 'react';
import { Link } from 'react-router-dom';
 import './Income.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
class Income extends Component{
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
       <div className="id2">
        <center>
            <h4>INCOME DETAILS</h4>
            <div className='id3'>

               <div className='l'>
               <label>AMOUNT</label>
               </div>
               
               <div className='l1'>
               <TextField id="income" label="Amount" variant="standard" /><br></br><br></br><br></br>
               </div>

               <div className='l'>
               <label>SOURCE</label>
               </div>

               <div className='l1'>
               <TextField id="income" label="Source" variant="standard" /><br></br><br></br><br></br>
               </div>

               <div className='l'>
               <label>DESCRIPTION</label>
               </div>

               <div className='l1'>
               <TextField id="income" label="Description" variant="standard" /><br></br><br></br><br></br>
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
export default Income;