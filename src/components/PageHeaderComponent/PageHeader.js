import React, { Component } from "react";
import "./PageHeader.css";
//import styles from "./PageHeader.module.css";
//import pageHeaderImage from "./../../Assets/Page_Header_Images/Home_page1.png";
//console.log(<img src={pageHeaderImage} alt={"logo"}/>)

class PageHeader extends Component {
 
    render() {
      
      return (
        <>
        
        <div className="ui center aligned container" id="pageHeaderContainer">       
            <img className="pageHeaderOverlay" src={this.props.info.pageHeaderImage} alt={"logo"}/>
            <div className="pageHeaderTitle" > 
             {this.props.info.pageHeaderTitle}
            </div>
        </div>
               
        </>
      );
    }
  }
  
  export default PageHeader;