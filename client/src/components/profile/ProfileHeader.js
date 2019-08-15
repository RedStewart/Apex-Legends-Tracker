import React from 'react';
import avatar from '../../images/avatar.png';
import rankedIcon from '../../images/ranked/diamond.png';

const ProfileHeader = () => {
  return (
    <div className='profile-header'>
      <div className='grid-3'>
        <div className='header-item'>
          <img className='round-img' src={avatar} alt='platform avatar' />
          <div>
            <h1>r33333d0</h1>
            <i className='fab fa-windows icon' />
          </div>
        </div>

        <div className='header-item'>
          <img className='round-img' src={rankedIcon} alt='ranked icon' />
          <h3>Diamond I</h3>
          <p>
            1069 <span>RP</span>
          </p>
        </div>

        <div className='header-item stats-header-outer'>
          <div className='stats-header-inner'>
            <p>Level</p>
            <h2>69</h2>
            <br />
            <p>Overall Kills</p>
            <h2>1337</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
