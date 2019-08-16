import React from 'react';
import levelIcon from '../../images/level/100.png';

const ProfileHeader = ({ lifetimeStats, platformInfo }) => {
  const { kills, level, matchesPlayed, rankScore } = lifetimeStats;
  const { avatarUrl, platformSlug, platformUserId } = platformInfo;
  // Parsing the rank
  const rankName = rankScore.metadata.iconUrl
    .replace('https://trackercdn.com/cdn/apex.tracker.gg/ranks/', '')
    .replace('.png', '')
    .replace(/[0-9]/g, '');
  const rankDiv = rankScore.metadata.iconUrl.replace(
    /(^.+\D)(\d+)(\D.+$)/i,
    '$2'
  );

  console.log(parseInt(level.value));

  return (
    <div className='profile-header'>
      <div className='grid-4'>
        <div className='header-item'>
          <img className='round-img' src={avatarUrl} alt='platform avatar' />
          <div className='header-name'>
            <h1>{platformUserId}</h1>
            <i
              className={`fab fa-${
                platformSlug === 'origin'
                  ? 'windows'
                  : platformSlug === 'psn'
                  ? 'playstation'
                  : 'xbox'
              } icon`}
            />
          </div>
        </div>

        <div className='header-item'>
          <img
            className='round-img'
            src={
              level.value < 20
                ? require(`../../images/level/0-19.png`)
                : level.value < 40
                ? require(`../../images/level/20-39.png`)
                : level.value < 60
                ? require(`../../images/level/40-59.png`)
                : level.value < 80
                ? require(`../../images/level/60-79.png`)
                : level.value < 100
                ? require(`../../images/level/80-99.png`)
                : require(`../../images/level/100.png`)
            }
            alt='level icon'
          />
          <h3>Level</h3>
          <p>{level.value}</p>
        </div>

        <div className='header-item'>
          <img
            className='round-img'
            src={rankScore.metadata.iconUrl}
            alt='ranked icon'
          />
          <h3>
            {rankName === 'apex' ? 'Apex Predator' : rankName + ' ' + rankDiv}
          </h3>
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
