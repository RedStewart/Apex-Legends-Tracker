import React, { useContext, useEffect } from 'react';
import { Button, Icon } from 'antd';
import ProfileContext from '../context/profile/profileContext';
// import LegendSelect from './legendSelect/LegendSelect';
import SelectedLegend from './SelectedLegend';
import LegendDisplay from './LegendDisplay';

const image = require('../images/profile-bg.png');

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
    } else {
      document.getElementById('page-bg').style.background = `url(${image})`;
    }
  }, []);

  if (loading) return <h1>Loading</h1>;

  return (
    <div>
      {profileError ? (
        <h1>Error</h1>
      ) : (
        <div>
          <h1 style={{ color: '#fff' }}>
            {profileData.platformInfo.platformUserId}
          </h1>
          {/* <LegendSelect /> */}
          <div className='grid-3'>
            {/* Change the url for this to the active legend when created in context */}
            <LegendDisplay legendUrl={profileData.segments[1].metadata} />
            <SelectedLegend />
            <SelectedLegend />
          </div>
        </div>
      )}

      <a href='/' onClick={() => clearProfile()}>
        <Button type='primary' size='large'>
          <Icon type='left' />
          Go Back
        </Button>
      </a>
    </div>
  );
};

export default Profile;
