import React, { useState} from 'react';
import './Navbar.css';
import i from '../assets/i1.png';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import {useSelector} from 'react-redux';
import Logout from "./Logout";
// import image from '../assets/logo.gif'
function HomePage () {
    
    const user=useSelector(state => state.user.value)
    
    return ( 
        <>
     <div className='body1'>
        <nav>
            {/* <img src={image} style={{width:'8vw',height:'8vh'}}></img> */}
            <h1 style={{fontFamily:'unset' ,color:'#00CED1' ,fontSize:'30px'}}>EXPENSIFY</h1>
            <div >
                <ul  id="navbar">
                    <li><Link to="/HomePage">Home</Link></li>
                    <li><Link to='/AboutUs'>About Us</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                    <li>{!user.email?
                    <Link to='/'>Logout</Link>:
                    <h4>{user.email}<Logout/></h4>}</li>
                    
                </ul>
                    
            </div>
        </nav>
        <div className='body2'>
           <img src={i} style={{width:'100px',paddingLeft:'50px'}}></img>
           <br></br><br></br>
           <ul id="navbar1">
            <li><Link to='/Dashboard'>DASHBOARD</Link></li><br></br><br></br>
            <li><Link to='/Income'>MY INCOME</Link></li><br></br><br></br>
            <li><Link to='/Expense'>EXPENSE</Link></li><br></br><br></br>
            <li><Link to='/Budget'>BUDGET</Link></li><br></br><br></br>
            <li><Link to='/Debt'>DEBT</Link></li><br></br><br></br>
            <li><Link to='/Goal'>GOAL SETTING</Link></li><br></br><br></br>
            <li><Link to='/Report'>REPORTS</Link></li><br></br><br></br>
           </ul>
           <h3></h3>
        </div>
        <div className='body3'>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("SAVING IS A GREAT HABIT BUT WITHOUT INVESTING AND TRACKING, IT JUST SLEEPS...")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("WELCOME TO THE FINANCE DEPARTMENT WHERE EVERYBODY COUNTS!")
                        .deleteAll()
                        .typeString("MIND OVER MATTER. MONEY OVERALL. ")
                        .typeString("HUSTLE UNTIL YOUR MONEY MAKES MONEY!!!")
                        .deleteAll()
                        .typeString("A PENNY SAVED IS A PENNY EARNED...")
                        .deleteAll()
                        .start();
                }}
            />
        </div>
       </div>
       
        
        </>
     );
    
            }

export default HomePage;