import React from 'react';
import PageHeader from "../../Components/PageHeaderComponent/PageHeader";
import PageImage from "./../../Assets/Page_Header_Images/About_me_page.jpg";

const pageHeaderInfo = {
    pageHeaderTitle : "About Me",
    pageHeaderImage : PageImage,
};

class AboutMePage extends React.Component{
    render() {
     return(   
        <div className="ui container">
         <PageHeader info={pageHeaderInfo} />
            <h2>About Me</h2>
            <h1>Bona autem corporis huic sunt, quod posterius posui, similiora.</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inde sermone vario sex illa a Dipylo stadia confecimus. Ex quo intellegitur officium medium quiddam esse, quod neque in bonis ponatur neque in contrariis. Duo Reges: constructio interrete. Post enim Chrysippum eum non sane est disputatum. Audeo dicere, inquit. Itaque hic ipse iam pridem est reiectus; </p>

<p>Totum autem id externum est, et quod externum, id in casu est. Ut optime, secundum naturam affectum esse possit. At certe gravius. Aufert enim sensus actionemque tollit omnem. Nemo nostrum istius generis asotos iucunde putat vivere. Bona autem corporis huic sunt, quod posterius posui, similiora. </p>

<p>Quantum Aristoxeni ingenium consumptum videmus in musicis? Etenim semper illud extra est, quod arte comprehenditur. Haec quo modo conveniant, non sane intellego. Quod quidem iam fit etiam in Academia. <b>Si mala non sunt, iacet omnis ratio Peripateticorum.</b> Aufert enim sensus actionemque tollit omnem. </p>


        </div>
     );
    }
}
export default AboutMePage;
