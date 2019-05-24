import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Project from './components/pages/projects';
import Bio from './components/pages/bio';
//import Contact from './components/pages/contact';
//<Route exact path='/Contact' component={Contact} />

//includes
import './Assets/CSS/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Header />
          <Route exact path='/Website' component={Homepage}/>
          <Route exact path='/Projects' component={Project} />
          <Route exact path='/Bio' component={Bio} />

        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
