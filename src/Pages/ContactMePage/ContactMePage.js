import React from 'react';
import PageHeader from "../../Components/PageHeaderComponent/PageHeader";
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
            <p>The Contact Me page</p>
        </div>
     );
    }
}
export default ContactMePage;