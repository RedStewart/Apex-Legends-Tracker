import React, { useReducer } from 'react';
import axios from 'axios';
import ProfileContext from './profileContext';
import ProfileReducer from './profileReducer';
import { GET_PROFILE, PROFILE_ERROR, CLEAR_ERROR, SET_LOADING } from '../types';

const ProfileState = props => {
  const initialState = {
    profileData: null,
    profileError: null,
    loading: false
  };

  // dispatch refers to the githubreducer i.e. the params we passed into the useReducer func
  const [state, dispatch] = useReducer(ProfileReducer, initialState);

  // get profile
  const getProfile = async (platform, gamertag) => {
    setLoading();

    try {
      const res = await axios.get(`/api/v1/profile/${platform}/${gamertag}`);
      dispatch({
        type: GET_PROFILE,
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.data.msg
      });
      setTimeout(() => clearError(), 3000);
      return err.response.data.msg;
    }
  };

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Clear error
  const clearError = () => dispatch({ type: CLEAR_ERROR });

  return (
    <ProfileContext.Provider
      value={{
        profileData: state.profileData,
        profileError: state.profileError,
        loading: state.loading,
        getProfile
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
