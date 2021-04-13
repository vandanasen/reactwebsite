import React from 'react';
import "./Footer.css";
import instagram from "./../../Assets/Social_icons_images/instagram.png";
class Footer extends React.Component{
    render() {
     return(   
    <footer>
    <div className="ui container" id="footercontainer">
    <img className="socialicon" src={instagram} alt={"logo"}/>
    <i class="linkedin square icon"></i>
    <i class="linkedin icon"></i>
    <h3>I am the footer</h3>
    </div>
    
    </footer>
     );
    }
}
export default Footer;