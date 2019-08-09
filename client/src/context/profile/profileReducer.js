import { GET_PROFILE, PROFILE_ERROR, SET_LOADING, CLEAR_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profileData: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case PROFILE_ERROR:
      return {
        ...state,
        profileError: action.payload,
        loading: false
      };

    case CLEAR_ERROR:
      return {
        ...state,
        profileError: null
      };

    default:
      return state;
  }
};
