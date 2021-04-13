import React from 'react';
import PageHeader from "../../components/PageHeaderComponent/PageHeader";
import PageImage from "./../../Assets/Page_Header_Images/Blog_page.png";

const pageHeaderInfo = {
    pageHeaderTitle : "Blog",
    pageHeaderImage : PageImage,
};

class BlogPage extends React.Component{
    render() {
     return(   
        <div>
        <PageHeader info={pageHeaderInfo} />
        <div className="ui container">
        <h3>My Blog</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan lobortis ullamcorper. Quisque id auctor ipsum. Nam eu magna id quam luctus pharetra non quis augue. Donec scelerisque, augue a consectetur maximus, mauris nisi rutrum ipsum, non porta lorem tortor quis massa. Nam molestie nibh purus, vel pharetra ipsum finibus eu. Donec feugiat non mauris ac porttitor. Donec hendrerit ante dui, ac vulputate purus finibus fermentum. Sed pharetra dolor libero, nec ullamcorper ligula facilisis nec.

Aliquam condimentum, mauris a tempus tempus, justo ligula aliquet ex, sit amet vehicula velit ante vitae nulla. Sed ultrices aliquam massa, ut lobortis nunc interdum nec. Sed condimentum est in est sollicitudin venenatis. Vestibulum vestibulum augue congue ipsum vestibulum posuere. Mauris lacinia magna velit, gravida tempor metus molestie ac. Sed non mauris leo. Suspendisse potenti. Donec lorem est, tristique sit amet dapibus id, bibendum a erat. Praesent nec nisl nec mauris scelerisque consectetur. Sed porttitor justo vitae urna condimentum, id gravida enim vulputate. Proin diam mi, cursus id vulputate nec, gravida at tortor. Aliquam erat volutpat. Morbi eu fermentum metus. Nullam et elit orci.

Curabitur consectetur nunc eu viverra euismod. Aliquam pretium, justo sed iaculis vestibulum, nisi magna finibus dolor, et iaculis orci odio ac nisl. Nunc nec libero a ligula pharetra scelerisque. Vivamus lobortis eu augue eget luctus. Duis ut purus a nisi blandit gravida. In sed ligula id dui pellentesque tincidunt. Aenean lectus nisl, blandit sit amet justo consectetur, ultricies suscipit ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut id metus ut lacus luctus rhoncus et non massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum vitae venenatis est. Etiam ligula augue, accumsan vel lorem quis, condimentum consectetur dolor. Praesent id metus at diam congue semper id in sapien. Mauris pretium iaculis metus, vitae dapibus dui imperdiet non.

            </p>
        </div>
        
        </div>
     );
    }
}
export default BlogPage;
