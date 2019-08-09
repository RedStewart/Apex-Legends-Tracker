import {
  GET_PROFILE,
  PROFILE_ERROR,
  FETCH_DATA,
  CLEAR_ERROR,
  CLEAR_PROFILE
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profileData: action.payload,
        loading: false,
        fetchData: false
      };

    case FETCH_DATA:
      return {
        ...state,
        fetchData: true
      };

    case PROFILE_ERROR:
      return {
        ...state,
        profileError: action.payload,
        loading: false,
        fetchData: false
      };

    case CLEAR_ERROR:
    case CLEAR_PROFILE:
      return {
        ...state,
        profileError: null,
        profileData: null
      };

    default:
      return state;
  }
};
