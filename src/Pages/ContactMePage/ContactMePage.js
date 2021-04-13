import React from 'react';
import PageHeader from "../../components/PageHeaderComponent/PageHeader";
import PageImage from "./../../Assets/Page_Header_Images/Contact_me_page.jpg";

const pageHeaderInfo = {
    pageHeaderTitle : "Contact Me",
    pageHeaderImage : PageImage,
};

class ContactMePage extends React.Component{
    render() {
     return(   
        <div>
            <PageHeader info={pageHeaderInfo} />
            
            <div className="ui vertical stripe quote segment">
        <div className="ui equal width stackable internally celled grid">
          <div className="center aligned row">
            <div className="column">
              <h3>"What a Company"</h3>
              <p>That is what they all say about us</p>
            </div>
            <div className="column">
              <h3>"I shouldn't have gone with their competitor."</h3>
              <p>
                
                <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
            </div>
          </div>
        </div>
      </div>
        </div>
     );
    }
}
export default ContactMePage;