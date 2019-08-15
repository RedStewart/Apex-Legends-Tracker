import React from 'react';
import avatar from '../../images/avatar.png';
import levelIcon from '../../images/level/100.png';
import rankedIcon from '../../images/ranked/diamond.png';

const ProfileHeader = ({ lifetimeStats }) => {
  const { kills, level, matchesPlayed, rankScore } = lifetimeStats;

  return (
    <div className='profile-header'>
      <div className='grid-4'>
        <div className='header-item'>
          <img className='round-img' src={avatar} alt='platform avatar' />
          <div className='header-name'>
            <h1>r33333d0</h1>
            <i className='fab fa-windows icon' />
          </div>
        </div>

        <div className='header-item'>
          <img className='round-img' src={levelIcon} alt='level icon' />
          <h3>Level</h3>
          <p>{level.displayValue}</p>
        </div>

        <div className='header-item'>
          <img
            className='round-img'
            src={rankScore.metadata.iconUrl}
            alt='ranked icon'
          />
          <h3>Diamond I</h3>
          <p>
            {rankScore.displayValue} <span>RP</span>
          </p>
        </div>

        <div className='header-item stats-header-outer'>
          <div className='stats-header-inner'>
            <p>Overall Kills</p>
            <h2>{kills.displayValue}</h2>
            <br />
            <p>Games Played</p>

            {matchesPlayed ? <h2>{matchesPlayed.displayValue}</h2> : <h2>-</h2>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
