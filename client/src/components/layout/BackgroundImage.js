import React from 'react';

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

const gameImage = require(`../../images/${
  imageArr[Math.floor(Math.random() * imageArr.length)]
}.png`);

const smokeImage = require('../../images/profile-bg.png');

const BackgroundImage = ({ backgroundType }) => {
  if (backgroundType === 'landing')
    return (
      <div
        id='page-bg'
        style={{
          background: `url(${gameImage}) no-repeat center center fixed`,
          backgroundSize: 'cover'
        }}
      />
    );
  else
    return (
      <div
        id='page-bg'
        style={{
          background: `url(${smokeImage}) no-repeat center center fixed`,
          backgroundSize: 'cover'
        }}
      />
    );
};

export default BackgroundImage;
