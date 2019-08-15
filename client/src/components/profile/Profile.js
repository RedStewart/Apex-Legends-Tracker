import React, { useContext, useEffect, Fragment } from 'react';
import { Button, Icon, Spin } from 'antd';
import { Link } from 'react-router-dom';
import ProfileContext from '../../context/profile/profileContext';
import BackgroundImage from '../layout/BackgroundImage';
import ProfileHeader from './ProfileHeader';

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

  if (loading)
    return (
      <Fragment>
        <BackgroundImage />
        <Spin size='large' />
      </Fragment>
    );

  return (
    <Fragment>
      <BackgroundImage />
      {profileError ? (
        <h1>Error</h1>
      ) : (
        <div className='profile-container'>
          <ProfileHeader lifetimeStats={profileData.segments[0].stats} />
        </div>
      )}

      <Link to='/' onClick={() => clearProfile()}>
        <Button type='primary' size='large'>
          <Icon type='left' />
          Go Back
        </Button>
      </Link>
    </Fragment>
  );
};

export default Profile;
