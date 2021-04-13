import React from 'react';
import{Link} from 'react-router-dom';
import "./Header.css";
class Header extends React.Component{
    render() {
     return(   
    <header>
   <div className="ui center aligned container">
   <div className="ui four item borderless center aligned menu">
    
    <Link className="item" to="/">Home</Link>
    <Link className="item" to="/About">About Me</Link>
    <Link className="item" to="/Blog">Blog</Link>
    <Link className="item" to="/ContactMe">Contact Me</Link>
    </div>
   </div>
       
    
                 
                 
     </header>
    
     );
    }
}
export default Header;
