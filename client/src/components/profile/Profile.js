import React, { useContext, useEffect, Fragment } from 'react';
import uuid from 'uuid';
import { Button, Icon, Spin } from 'antd';
import { Link } from 'react-router-dom';
import ProfileContext from '../../context/profile/profileContext';
import NavBar from '../layout/NavBar';
import BackgroundImage from '../layout/BackgroundImage';
import ProfileHeader from './ProfileHeader';
import LegendItem from './LegendItem';

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
    //eslint-disable-next-line
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
      <NavBar />
      <BackgroundImage />
      {profileError ? (
        <h1>Error</h1>
      ) : (
        <div className='profile-container'>
          <ProfileHeader
            lifetimeStats={profileData.segments[0].stats}
            platformInfo={profileData.platformInfo}
          />
          <hr
            style={{
              border: 'none',
              height: '4px',
              color: '#da292a',
              backgroundColor: '#da292a'
            }}
          />
          <div className='legend-container'>
            <div className='grid-3'>
              {profileData.segments
                .slice(1)
                .map(legend =>
                  legend.attributes.id !== 'legend_0' ? (
                    <LegendItem key={uuid.v4()} legend={legend} />
                  ) : (
                    ''
                  )
                )}
            </div>
          </div>
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
