import React from 'react';

const ProfileHeader = ({ lifetimeStats, platformInfo, activeLegend }) => {
  const { kills, level, rankScore } = lifetimeStats;
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
          <div className='level-img-container'>
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
            <p>{level.value > 99 ? '' : level.value}</p>
          </div>
          <h3>Level</h3>
          <p className='level-text'>{level.value}</p>
        </div>

        <div className='header-item'>
          <img
            className='round-img'
            src={rankScore.metadata.iconUrl}
            alt='ranked icon'
          />
          <h3 style={rankName === 'apex' ? { color: '#da292a' } : {}}>
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
            <p>Active Legend</p>
            <h2>{activeLegend}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
