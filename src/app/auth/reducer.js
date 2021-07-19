import {
  SET_AUTH_ACTION, SET_AUTH_LOADING_ACTION, SET_FETCHED_ACTION, SET_USERDATA_ACTION,
} from './actions';

const defaultState = {
  isAuth: false,
  isLoading: false,
  userData: {
    username: '',
    balance: 0,
    command: [],
  },
  isFetched: false,
};
// eslint-disable-next-line import/prefer-default-export
export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_AUTH_ACTION: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }
    case SET_USERDATA_ACTION: {
      return {
        ...state,
        userData: action.payload,
      };
    }
    case SET_AUTH_LOADING_ACTION: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case SET_FETCHED_ACTION: {
      return {
        ...state,
        isFetched: action.payload,
      };
    }
    default:
      return state;
  }
};
