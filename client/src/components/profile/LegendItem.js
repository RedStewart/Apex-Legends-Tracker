import React, { Fragment } from 'react';

const LegendItem = () => {
  return (
    <div className='legend-item'>
      <div className='legend-name-container'>
        <h1>Pathfinder</h1>
        <img
          className='legend-img'
          src='https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-pathfinder.png.adapt.crop16x9.png'
          alt='legend'
        />
      </div>
    </div>
  );
};

export default LegendItem;
