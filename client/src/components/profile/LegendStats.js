import React from 'react';

const LegendStats = () => {
  return (
    <div className='legend-container'>
      <div className='center-div'>
        <div className='grid-3 top-grid'>
          <div className='top-grid-item'>
            <h3>
              LIFETIME <span>GAMES</span>
            </h3>
            <p>990</p>
          </div>
          <div className='top-grid-item'>
            <h3>
              LIFETIME <span>WINS</span>
            </h3>
            <p>32</p>
          </div>
          <div className='top-grid-item'>
            <h3>
              LIFETIME <span>TOP 5S</span>
            </h3>
            <p>990</p>
          </div>
        </div>

        <div className='grid-2 mid-grid'>
          <div className='mid-grid-item'>
            <h3>
              LIFETIME <span>DAMAGE DEALT</span>
            </h3>
            <p className='mid-grid-main-dmg'>268,580</p>
            <p className='mid-grid-item-minor'>
              HIGHEST <span>1,537</span>
            </p>
            <p className='mid-grid-item-minor'>
              AVG <span>271.29</span>
            </p>
          </div>

          <div className='mid-grid-item'>
            <h3>
              LIFETIME <span>KILLS</span>
            </h3>
            <p className='mid-grid-main-dmg'>891</p>
            <p className='mid-grid-item-minor'>
              DEATHS <span>1,026</span>
            </p>
            <p className='mid-grid-item-minor'>
              K/DR <span>0.86</span>
            </p>
          </div>
        </div>

        <div className='grid-2 bot-grid'>
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
    </div>
  );
};

export default LegendStats;
