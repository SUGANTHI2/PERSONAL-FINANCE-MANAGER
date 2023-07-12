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
                    <li><Link to='/AboutUs'>About Us</Link></li>
                    <li><a href="index.html">Contact</a></li>
                    <li><Link to='/'>Logout</Link></li>
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
            <h1>Income details</h1>
            <div className='id3'>

               <div className='l'>
               <label>Amount:</label>
               </div>
               
               <div className='l1'>
               <TextField id="income" label="Amount" variant="outlined" /><br></br><br></br><br></br>
               </div>

               <div className='l'>
               <label>Source:</label>
               </div>

               <div className='l1'>
               <TextField id="income" label="Source" variant="outlined" /><br></br><br></br><br></br>
               </div>

               <div className='l'>
               <label>Description:</label>
               </div>

               <div className='l1'>
               <TextField id="income" label="Description" variant="outlined" /><br></br><br></br><br></br>
               </div>
            </div>

            </center>
       </div>
        </body>   
        
        </>
     );
    }
    
}
export default Income;