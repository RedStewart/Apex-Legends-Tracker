import React from 'react';
import { Card } from 'antd';

const LegendItem = ({ legend }) => {
  const { Meta } = Card;

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
      {/* <Card className='legend-content'>
        <Card.Grid style={gridStyle}>
          <h2>Season 1 Wins</h2>
          <p>1337</p>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <h2>Kills</h2>
          <p>1337</p>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <h2>Kills</h2>
          <p>1337</p>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <h2>Kills</h2>
          <p>1337</p>
        </Card.Grid>
      </Card> */}
      <div className='legend-content'>
        <div className='grid-2'>
          <div>
            <h2>Season 1 Wins</h2>
            <p>1337</p>
          </div>
          <div>
            <h2>Kills</h2>
            <p>1337</p>
          </div>
          <div>
            <h2>Kills</h2>
            <p>1337</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const gridStyle = {
  width: '50%',
  textAlign: 'center'
};

export default LegendItem;
