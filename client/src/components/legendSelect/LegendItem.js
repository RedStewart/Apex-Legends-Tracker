import React from 'react';
import { Icon } from 'antd';

const LegendItem = ({
  legend: {
    metadata: { imageUrl, isActive, name },
    attributes: {id}
  }
}) => {


  return (
    <div>
      <h1>
        {isActive && <Icon type='check' />}
        {name}
      </h1>
      <p>{id}</p>
      <img src={imageUrl} alt='' />
    </div>
  );
};

export default LegendItem;
