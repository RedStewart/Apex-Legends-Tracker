import React from 'react';

const ProfileHeader = () => {
  return (
    <div className='profile-header'>
      <div className='grid-3'>
        <div className='header-item'>
          <img
            className='round-img'
            src='./images/avatar.png'
            alt='platform avatar'
          />
          <div>
            <h1>r33333d0</h1>
            <i className='fab fa-windows icon' />
          </div>
        </div>

        <div className='header-item'>
          <img
            className='round-img'
            src='./images/ranked-icons/diamond.png'
            alt='ranked icon'
          />
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
