import React, { useReducer } from 'react';
import axios from 'axios';
import ProfileContext from './profileContext';
import ProfileReducer from './profileReducer';
import { SET_LOADING } from '../types';

const ProfileState = props => {
  const initialState = {
    profileData: null,
    error: null,
    loading: false
  };

  // dispatch refers to the githubreducer i.e. the params we passed into the useReducer func
  const [state, dispatch] = useReducer(ProfileReducer, initialState);

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ProfileContext.Provider
      value={{
        profileData: state.profileData,
        error: state.error,
        loading: state.loading
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
