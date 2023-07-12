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
        <div className='content'>
            <div className='c1'>
                <center>
                    <h1 style={{'fontFamily':'Garamond',fontSize:'50px',paddingTop:'25px',color:'#1E2F97'}}>ABOUT US</h1>
                    
                </center>
            </div>
        </div>
        </body>
        </>
     );
    }
}

export default AboutUs;