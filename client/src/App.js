import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfileState from './context/profile/ProfileState';
import Profile from './components/Profile';
import SideBar from './components/layout/SideBar';
import './App.css';

const App = () => {
  return (
    <ProfileState>
      <Router>
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
