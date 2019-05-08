import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';

<<<<<<< HEAD
const App = (props) => {
  return (
     <Router>
       <div className="app">
        <React.Fragment>
          <NavBar />
          <Route path="/" render={ Home }/>
          <Route path="/movies" render={ Movies }/>
          <Route path="/directors" render={ Directors }/>
          <Route path="/actors" render={ Actors }/>
        </React.Fragment>
       </div>
=======
const NavBar = () => 
  <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/movies">Movies</NavLink>
    <NavLink to="/directors">Directors</NavLink>
    <NavLink to="/actors">Actors</NavLink>
  </div>

const App = (props) => {
  return (
     <Router>
       <React.Fragment>
         <Route path="/" render={ Home }/>
         <Route path="/movies" render={ Movies }/>
         <Route path="/directors" render={ Directors }/>
         <Route path="/actors" render={ Actor }/>
       </React.Fragment>
>>>>>>> a4eb8fe9061db3c37ced323407f7aabde1bd76a9
     </Router>
  );
};

export default App

