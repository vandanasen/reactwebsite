import React from 'react';
import "./Footer.css";

import instagram from "./../../Assets/Social_icons_images/instagram.png";
import linkedin from "./../../Assets/Social_icons_images/linkedin.png";
import twitter from "./../../Assets/Social_icons_images/twitter.png";
import facebook from "./../../Assets/Social_icons_images/facebook.png";
import { Link } from 'react-router-dom';

class Footer extends React.Component{
    render() {
     return(   
    <footer>
    <div className="ui container" id="footercontainer">
{/*Begin*/}
<div className="ui vertical footer segment">
        <div className="ui container">
          <div className="ui stackable divided equal height stackable grid">
            <div className="ten wide column">
              <h4 className="ui inverted header" id="footermenu">Menu</h4>
              <div className="ui inverted link list">
                <a className="item" href="#root">Home</a>
                <a className="item" href="#root">About Me</a>
                <a className="item" href="#root">Blog</a>
                <a className="item" href="#root">Contact Me</a>
                
              </div>
            </div>
            
            <div className="four wide column">
              {/*<h4 className="ui inverted header">Footer Header</h4>*/}
              <Link to="//www.facebook.com" target="_blank"><img className="socialicon" src={facebook} alt={"facebook logo"}/></Link>
              
              <Link to="//www.instagram.com" target="_blank"><img className="socialicon" src={instagram} alt={"instagram logo"}/></Link>
              <Link to="//www.linkedin.com" target="_blank"><img className="socialicon" src={linkedin} alt={"linkedin logo"}/></Link>
              <Link to="//www.twitter.com" target="_blank"><img className="socialicon" src={twitter} alt={"twitter logo"}/></Link>

              
            </div>
          </div>
        </div>
      </div>
{/*End*/}





    
    </div>
    
    </footer>
     );
    }
}
export default Footer;