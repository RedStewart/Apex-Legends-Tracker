import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Radio, Icon } from 'antd';
import ProfileContext from '../context/profile/profileContext';

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
      {profileError ? <h1>Error</h1> : <h1>Profile</h1>}
      {/* <p>{profileData.expiryDate}</p> */}
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
