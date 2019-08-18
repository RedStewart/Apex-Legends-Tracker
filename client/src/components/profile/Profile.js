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

  const loadIcon = <Icon type='loading' style={{ fontSize: '5rem' }} spin />;

  if (loading)
    return (
      <Fragment>
        <NavBar />
        <BackgroundImage />
        <div className='profile-container'>
          <div className='spinner'>
            <Spin indicator={loadIcon} tip='Loading...' />
          </div>
        </div>
      </Fragment>
    );

  return (
    <Fragment>
      <NavBar />
      <BackgroundImage />
      {profileError || profileData === null ? (
        <div className='profile-container'>
          <div className='error'>
            <h1>
              <i className='fas fa-exclamation-triangle' />
              Error
            </h1>
            <p>Profile not found</p>
          </div>

          <Link to='/' onClick={() => clearProfile()}>
            <Button
              type='primary'
              size='large'
              style={{
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
                marginLeft: '1rem'
              }}
            >
              <Icon type='left' />
              Go Back
            </Button>
          </Link>
        </div>
      ) : (
        <div className='profile-container'>
          <Link to='/' onClick={() => clearProfile()}>
            <Button
              type='primary'
              size='large'
              style={{
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
                marginLeft: '1rem'
              }}
            >
              <Icon type='left' />
              Go Back
            </Button>
          </Link>
          <ProfileHeader
            lifetimeStats={profileData.segments[0].stats}
            platformInfo={profileData.platformInfo}
            activeLegend={profileData.metadata.activeLegendName}
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
    </Fragment>
  );
};

export default Profile;
