import React from 'react';

const LegendDisplay = ({ legendUrl: { name, imageUrl } }) => {
  return (
    <div className='legend-div'>
      <h1>{name}</h1>
      <img className='legend-display-img' src={imageUrl} alt='' />
    </div>
  );
};

export default LegendDisplay;
