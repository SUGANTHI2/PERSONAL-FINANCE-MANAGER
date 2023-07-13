import React ,{Component}from 'react';
import { Link } from 'react-router-dom';
 import './Debt.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import i from '../assets/l.jpg'
import im from '../assets/b.jpg'
class Debt extends Component{
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
       <div className='div1'>
        <h1><center>DEBT MANAGEMENT</center></h1>
        <div className='div2'>

        <div className='dl1'>
            <img src={i} style={{height:'250px',paddingLeft:'20rem',width:'250px',paddingTop:'5rem'}}></img>
        </div>
       
        <div className='dl2'>
        <img src={im} style={{height:'250px',width:'250px',paddingRight:'20rem',paddingTop:'5rem'}}></img>

        </div>
       
       </div>
        </div>
       
        </body>   
        
        </>
     );
    }
    
}
export default Debt;