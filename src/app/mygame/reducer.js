import {
  REST_STATE_MY_GAME,
  SET_FETCHED_MY_GAME,
  SET_GAME_DATA, SET_LAST_EVENTS, SET_LEADER_BOARD, SET_MY_GAME_LOADING, SET_MY_TEAM_GAME,
} from './actions';

const defaultState = {
  team: [],
  leaderBoard: [],
  lastEvents: [],
  game: {},
  isLoading: false,
  isFetched: false,
};

export const myGameReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_GAME_DATA: {
      return {
        ...state,
        game: action.payload,
      };
    }
    case SET_LEADER_BOARD: {
      return {
        ...state,
        leaderBoard: action.payload,
      };
    }
    case SET_MY_TEAM_GAME: {
      return {
        ...state,
        team: action.payload,
      };
    }
    case SET_LAST_EVENTS: {
      return {
        ...state,
        lastEvents: action.payload,
      };
    }
    case SET_MY_GAME_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case SET_FETCHED_MY_GAME: {
      return {
        ...state,
        isFetched: action.payload,
      };
    }
    case REST_STATE_MY_GAME: {
      return {
        ...defaultState,
      };
    }
    default:
      return state;
  }
};
