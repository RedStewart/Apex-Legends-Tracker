import React from 'react';
import { Icon } from 'antd';

const LegendItem = ({
  legend: {
    metadata: { imageUrl, isActive, name }
  }
}) => {
  return (
    <div>
      <h1>
        {isActive && <Icon type='check' />}
        {name}
      </h1>
      <img src={imageUrl} alt='' />
    </div>
  );
};

export default LegendItem;
