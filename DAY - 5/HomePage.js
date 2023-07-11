import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
class HomePage extends Component {
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return ( 
        <>
        <header>
        <nav>
            <h1 style={{fontFamily:'sans-serif' ,color:'white'}}>EXPENSIFY</h1>
            <div >
                <ul  id="navbar" className={this.state.clicked?"#navbar active":"navbar"}>
                    <li><a href="index.html">My Income</a></li>
                    <li><a href="index.html">Expense</a></li>
                    <li><a href="index.html">Report</a></li>
                    <li><Link to='/'>Logout</Link></li>
                </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
            </div>
        </nav>
        </header>
        <body>

        <div className='container'>
            <div className='s1'>
                
            </div>
        </div>
        </body>
        </>
     );
    }
}

export default HomePage;