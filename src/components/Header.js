import React from 'react';
import{Link} from 'react-router-dom';
class Header extends React.Component{
    render() {
     return(   
    <header>
        
                 <div className="ui secondary pointing menu">
                    <Link className="item" to="/">Home</Link>
                    <Link className="item" to="/About">About</Link>
                    <Link className="item" to="/Projects">Projects</Link>
                    <Link className="item" to="/Testimonials">Testimonials</Link>
                </div>
                 
     </header>
    
     );
    }
}
export default Header;
