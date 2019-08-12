import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';
import ProfileContext from '../context/profile/profileContext';
import LegendSelect from './legendSelect/LegendSelect';

const Profile = ({ match }) => {
  const profileContext = useContext(ProfileContext);
  const {
    getProfile,
    clearProfile,
    loading,
    profileData,
    profileError
  } = profileContext;

  useEffect(() => {
    if (!profileData) {
      getProfile(match.params.platform, match.params.gamertag);
    }
  }, []);

  if (loading) return <h1>Loading</h1>;

  return (
    <div>
      {profileError ? (
        <h1>Error</h1>
      ) : (
        <div>
          <h1 className='gamertag'>
            <img
              src={profileData.platformInfo.avatarUrl}
              alt=''
              className='platform-avatar'
            />
          </h1>
          <LegendSelect />
        </div>
      )}

      <Link to='/' onClick={() => clearProfile()}>
        <Button type='primary' size='large'>
          <Icon type='left' />
          Go Back
        </Button>
      </Link>
    </div>
  );
};

export default Profile;
