import React from 'react';
import './Navbar.css';
import i from '../assets/i1.png';
import { Link, useLocation } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import { useSelector } from 'react-redux';
import Logout from "./Logout";

function HomePage() {
    const user = useSelector(state => state.user.value);
  const location = useLocation();
  const data = location.state ;
    console.log("data from home page"+data);
  return (
    <>
      <div className='body1'>
        <nav>
          <h1 style={{ fontFamily: 'unset', color: '#00CED1', fontSize: '30px' }}>EXPENSIFY</h1>
          <div>
            <ul id="navbar">
              <li><Link to="/HomePage">Home</Link></li>
              <li><Link to='/AboutUs'>About Us</Link></li>
              <li><Link to='/Contact'>Contact</Link></li>
              <li>
                {!user.email ?
                  <Link to='/'>Logout</Link> :
                  <h4>{user.email}<Logout /></h4>
                }
              </li>
            </ul>
          </div>
        </nav>
        <div className='body2'>
          <img src={i} style={{ width: '100px', paddingLeft: '50px' }} alt="Logo"></img>
          <br></br><br></br>
          <ul id="navbar1">
          {/* <li><Link to='/Dashboard'>DASHBOARD</Link></li><br></br><br></br> */}
            <li><Link to={{ pathname: '/Income', state: { data }  }}>MY INCOME</Link></li><br></br><br></br>
            <li><Link to='/Expense' state= { {ename: data  }}>EXPENSE</Link></li><br></br><br></br>
            <li><Link to='/Budget'>BUDGET</Link></li><br></br><br></br>
            <li><Link to='/Debt'>DEBT</Link></li><br></br><br></br>
            <li><Link to='/Goal'>GOAL SETTING</Link></li><br></br><br></br>
            <li><Link to='/Report'>REPORTS</Link></li><br></br><br></br>
            <li><Link to='/FeedBack'>FEEDBACK</Link></li><br></br><br></br>
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
