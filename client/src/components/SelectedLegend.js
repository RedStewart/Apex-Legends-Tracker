import React from 'react';

const SelectedLegend = () => {
  return (
    <div className='legend-container'>
      <div className='grid-3 top-grid'>
        <div className='top-grid-item'>
          <h3>LIFETIME GAMES</h3>
          <p>990</p>
        </div>
        <div className='top-grid-item'>
          <h3>LIFETIME WINS</h3>
          <p>32</p>
        </div>
        <div className='top-grid-item'>
          <h3>LIFETIME TOP 5S</h3>
          <p>990</p>
        </div>
      </div>

      <div className='grid-2'>
        <div>
          <h3>LIFETIME DAMAGE DEALT</h3>
          <p>268,580</p>
          <h4>HIGHEST</h4>
          <p>1,537</p>
          <h4>AVG</h4>
          <p>271.29</p>
        </div>

        <div>
          <h3>LIFETIME KILLS</h3>
          <p>891</p>
          <h4>DEATHS</h4>
          <p>1,026</p>
          <h4>K/DR</h4>
          <p>0.86</p>
        </div>
      </div>

      <div className='grid-2'>
        <div>
          <ul>
            <li>
              Highest Kills <span>4</span>
            </li>
            <li>
              Knockdowns <span>1,091</span>
            </li>
            <li>
              Assists <span>12</span>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              Longest Win Streak <span>1</span>
            </li>
            <li>
              Teammates Revived <span>213</span>
            </li>
            <li>
              Teammates Respawned <span>7</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectedLegend;
