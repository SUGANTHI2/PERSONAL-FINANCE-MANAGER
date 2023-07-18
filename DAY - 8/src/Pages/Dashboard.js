import React ,{Component}from 'react';
import { Link } from 'react-router-dom';
// import './Contact.css';
import './Dashboard.css'
class Dashboard extends Component{
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
        <div className='whole'>
            <h2 style={{fontSize:'25px',fontFamily:'-moz-initial'}}><center>WELCOME!!</center></h2>
            <div className='w1'>
                <div className='in'>
                    <div className='head'>

                    <div className='h'>
                    <h2 style={{paddingRight:'2rem'}}>TOTAL&nbsp;AMOUNT:</h2>
                  <h3 style={{fontSize:'30px',paddingLeft:'10rem',color:'GrayText'}}>2000</h3>
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
    
}
export default Dashboard;