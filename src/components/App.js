import React from 'react';
import Header from './HeaderComponent/Header';
import HomePage from '../Pages/HomePage/HomePage';
import AboutMePage from '../Pages/AboutMePage/AboutMePage';
import BlogPage from '../Pages/BlogPage/BlogPage';
import ContactMePage from '../Pages/ContactMePage/ContactMePage';
import Footer from './FooterComponent/Footer';
import{BrowserRouter as Router,Route} from 'react-router-dom';
class App extends React.Component{
    render() {
     return(  
         <Router>
          <div>
          <Header/>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/About' component={AboutMePage}/>
          <Route exact path='/Blog' component={BlogPage}/>
          <Route exact path='/ContactMe' component={ContactMePage}/>
          <Footer/>
    </div>   
         </Router> 
    
     );
    }
}
export default App;