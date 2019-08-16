import React from 'react';

const LegendItem = ({ legend }) => {
  return (
    <div className='legend-item'>
      <div className='legend-name-container'>
        <h1>{legend.metadata.name}</h1>
        <img
          className='legend-img'
          src={legend.metadata.imageUrl}
          alt='legend'
        />
      </div>
    </div>
  );
};

export default LegendItem;
