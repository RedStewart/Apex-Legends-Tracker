import React, { useContext, useEffect } from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import ProfileContext from '../context/profile/profileContext';
import BackgroundImage from './layout/BackgroundImage';
import SelectedLegend from './SelectedLegend';
import LegendDisplay from './LegendDisplay';

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
      <BackgroundImage />
      {profileError ? (
        <h1>Error</h1>
      ) : (
        <div>
          <h1 style={{ color: '#fff' }}>
            {profileData.platformInfo.platformUserId}
          </h1>
          <div className='grid-3'>
            {/* Change the url for this to the active legend when created in context */}
            <LegendDisplay legendUrl={profileData.segments[1].metadata} />
            <SelectedLegend />
            <SelectedLegend />
          </div>
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
