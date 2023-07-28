import React ,{Component}from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
// import { useRef } from 'react';
import {useUser} from './userContext';
import './Dashboard.css'
function Dashboard(){
    const location=useLocation();
    const data=location.state.ename;
    const[balance,setBalance]=useState(0);
    const{userEmail}=useUser();

    useEffect(() => {
        axios.get(`http://localhost:8080/getBalance/${data}`).then((response)=>{setBalance(response.data)})
      }, []);
       // const navRef = useRef();
        const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());

  
    return ( 
        <>
       <header>
        <div className="mc">
        <nav>
            <h1 style={{fontFamily:'unset' ,color:'#00CED1' ,fontSize:'25px'}}>EXPENSIFY</h1>
            <div >
                <ul  id="navbar" >
                    <li><Link to="/HomePage">Home</Link></li>
                    <li><Link to='/AboutUs'>About Us</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                    <li><Link to='/'>Logout</Link></li>
                </ul>
            </div>
            {/* <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
            </div> */}
        </nav>
        </div>
        </header>
       <body>
        <div className='whole'>
            <h2 style={{fontSize:'25px',fontFamily:'-moz-initial'}}><center>WELCOME!!</center></h2>
            {/* <p>{data}</p> */}
            <p>User Email: {userEmail}</p> 
            <div className='w1'>
                <div className='in'>
                    <div className='head'>

                    <div className='h'>
                    <h2 style={{paddingRight:'0.5rem'}}>BALANCE&nbsp;AMOUNT:</h2>
                  <h3 style={{fontSize:'30px',paddingLeft:'10rem',color:'GrayText'}}>Rs.{balance}</h3>
                    </div>
                </div>
                    </div>
                <div className='in1'>

                </div>
           
        </div>
            </div>
       </body>
        
        </>
     );
    
    
        }  
export default Dashboard;