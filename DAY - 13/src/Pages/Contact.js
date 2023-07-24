import React ,{Component}from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
class Contact extends Component{
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
        <div className='cb'>
            <div className='icons'>
                
            <a href="https://www.facebook.com/Expensify/"><i class="fab fa-facebook"></i></a><br></br><br></br>
					<a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fexpensify%3Flang%3Den"><i class="fab fa-twitter"></i></a><br></br><br></br>
					<a href="https://www.linkedin.com/company/expensify"><i class="fab fa-linkedin"></i></a><br></br><br></br>
					<a href="https://github.com/Expensify/App"><i class="fab fa-github"></i></a><br></br><br></br>
					<a href="https://www.instagram.com/expensify/?hl=en#:~:text=Expensify%20(%40expensify)%20%E2%80%A2%20Instagram%20photos%20and%20videos"><i class="fab fa-instagram"></i></a><br></br>
					<a href="https://www.instagram.com/expensify/?hl=en#:~:text=Expensify%20(%40expensify)%20%E2%80%A2%20Instagram%20photos%20and%20videos"><i class="	place"></i></a><br></br>
                    <a href="#"><i class="material-icons" >&#xe0b0;</i></a>
            </div>
           
        </div>
       </body>
        
        </>
     );
    }
    
}
export default Contact;