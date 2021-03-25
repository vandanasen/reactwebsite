import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Footer from './Footer';
import{BrowserRouter as Router,Route} from 'react-router-dom';
class App extends React.Component{
    render() {
     return(  
         <Router>
          <div>
          <Header/>
          <Route exact path='/'component={Home}/>
          <Route exact path='/About'component={About}/>
          <Route exact path='/Projects'component={Projects}/>
          <Route exact path='/Testimonials'component={Testimonials}/>
          <Footer/>
          
         {/* <Header/>
       <MainContent/>
       <Footer/>*/}
    </div>   
         </Router> 
    
     );
    }
}
export default App;