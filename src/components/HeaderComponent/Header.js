import React from 'react';
import{Link} from 'react-router-dom';
import "./Header.css";
class Header extends React.Component{
    render() {
     return(   
    <header>
    <div className = "ui container" id="headercontainer">
    
                 <div class="ui grey inverted segment">
  <div class="ui orange four item inverted secondary menu">
    <Link className="orange item" to="/">Home</Link>
    <Link className="orange item" to="/About">About Me</Link>
    <Link className="orange item" to="/Blog">Blog</Link>
    <Link className="item" to="/ContactMe">Contact Me</Link>
    
  </div>
</div>
    </div>
                 
                 
     </header>
    
     );
    }
}
export default Header;
