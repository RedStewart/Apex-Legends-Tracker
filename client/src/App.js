import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AlertState from './context/alert/AlertState';
import ProfileState from './context/profile/ProfileState';
import Search from './components/Search';
import Profile from './components/Profile';
import SideBar from './components/layout/SideBar';
import BackgroundImage from './components/layout/BackgroundImage';
import './App.css';

const App = () => {
  // useEffect(() => {
  //   document.getElementById('page-bg').style.background = `url(${image})`;
  // }, []);

  return (
    <ProfileState>
      <AlertState>
        <Router>
          {/* <div id='page-bg' /> */}
          {/* <BackgroundImage backgroundType={'landing'} /> */}
          <div>
            <Switch>
              <Route exact path='/' component={SideBar} />
              <Route
                exact
                path='/profile/:platform/:gamertag'
                component={Profile}
              />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </ProfileState>
  );
};

const imageArr = [
  'bangalore',
  'bloodhound',
  'caustic',
  'gibraltar',
  'lifeline',
  'mirage',
  'octane',
  'pathfinder',
  'wraith'
];

const image = require(`./images/${
  imageArr[Math.floor(Math.random() * imageArr.length)]
}.png`);

export default App;
