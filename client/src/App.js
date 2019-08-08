import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import './App.css';

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

const App = () => {
  const image = require(`./images/${
    imageArr[Math.floor(Math.random() * imageArr.length)]
  }.png`);

  useEffect(() => {
    document.getElementById('page-bg').style.background = `url(${image})`;
  }, [image]);

  return (
    <div className='container'>
      <div style={backgroundStyle} id='page-bg' />
      <Header />
      <Search />
    </div>
  );
};

export default App;
