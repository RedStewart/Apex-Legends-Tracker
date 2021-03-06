import React from 'react';
import uuid from 'uuid';

const LegendItem = ({ legend }) => {
  // console.log(legend.stats);

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

      <div className='legend-content'>
        <div className='flexbox'>
          {Object.values(legend.stats).map(statGroup => (
            <div key={uuid.v4()}>
              <h2>{statGroup.displayName}</h2>
              <p>{statGroup.displayValue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegendItem;
