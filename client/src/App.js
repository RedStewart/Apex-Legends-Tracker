import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfileState from './context/profile/ProfileState';
import Profile from './components/profile/Profile';
import SideBar from './components/layout/SideBar';
import NavBar from './components/layout/NavBar';
import './App.css';

const App = () => {
  return (
    <ProfileState>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={SideBar} />
          <Route
            exact
            path='/profile/:platform/:gamertag'
            component={Profile}
          />
        </Switch>
      </Router>
    </ProfileState>
  );
};

export default App;
