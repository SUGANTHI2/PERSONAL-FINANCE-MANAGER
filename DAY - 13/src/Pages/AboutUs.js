import React, { Component } from 'react';
// import i from '../assets/f4.jpg';
import { Link } from 'react-router-dom';
import './AboutUs.css';
class AboutUs extends Component {
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
                    <li><Link to='/Contact'>Contact</Link></li>
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
        <div className='content'>
            <div className='c1'>
                <center>
                    <h1 style={{'fontFamily':'Garamond',fontSize:'50px',paddingTop:'25px',color:'#1E2F97'}}>ABOUT US</h1>
                   
                    <h3 style={{fontSize:'25px',fontFamily:'cursive',color:'black'}}>
                    <i>EXPENSIFY</i> works to process payments more effectively,<br></br> recovering millions of dollars in lost revenue, and continuing to provide valuable services to happy customers.
                    </h3>
                    <h1 style={{color:'#1E2F97',fontSize:'35px',fontFamily:'Garamond' ,float:'left'}}>OUR MISSION :</h1>
                    <br></br><br></br><br></br>
                    <h4 style={{fontSize:'25px',fontFamily:'cursive',color:'black'}}>
EXPENSIFY'S  mission is to serve as a trusted partner to our clients by responsibly providing financial services that enable growth and economic progress. <br></br>
We have set expectations for how we must act to bring our mission to life. <br></br>These expectations are at the heart of our Leadership Principles – we take ownership, we deliver with pride and we succeed together.</h4>
                </center>
            </div>
        </div>
        </body>
        </>
     );
    }
}

export default AboutUs;