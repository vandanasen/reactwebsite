import React, { Component } from 'react';
import "./HomePage.css";
import PageHeader from "../../Components/PageHeaderComponent/PageHeader";
import PageImage from "./../../Assets/Page_Header_Images/Home_page.jpg";
import galImage1 from "./../../Assets/Gallery_Images/pic1.png";
import galImage2 from "./../../Assets/Gallery_Images/pic2.jpg";
import galImage3 from "./../../Assets/Gallery_Images/pic3.jpg";
import galImage4 from "./../../Assets/Gallery_Images/pic4.jpg";
const pageHeaderInfo = {
    pageHeaderTitle : "Home",
    pageHeaderImage : PageImage,
};

class HomePage extends Component{
    
      
    render() {
     return(
         <>
         
         
      <div className="ui container" id="homePageContainer">
      <PageHeader info={pageHeaderInfo} />
      
      
<div class="ui four column centered grid" id="grid1">
    
    <div class="column" id="col1">
        <div className="ui segment">
           <img class="ui centered image" id="gallery_image" src={galImage1} alt="logo"></img>
        </div>
    </div>

    <div class="column" id="col2">
        <div className="ui segment">
           <img class="ui centered image" id="gallery_image" src={galImage2} alt="logo"></img>
        </div>
    </div>

    <div class="column" id="col3">
        <div className="ui segment">
           <img class="ui centered image" id="gallery_image" src={galImage3} alt="logo"></img>
        </div>
    </div>


    <div class="column" id="col4">
        <div className="ui segment">
           <img class="ui centered image" id="gallery_image" src={galImage4} alt="logo"></img>
        </div>
    </div>
    
  </div>
        
      
      </div>  
      
               
        </>
     );
    }
}
export default HomePage;
