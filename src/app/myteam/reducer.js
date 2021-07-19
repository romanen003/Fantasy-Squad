import {
  RESET_MY_TEAM_STATE,
  SET_BALANCE_MY_TEAM, SET_LAST_GAME,
  SET_MT_LOADING, SET_MT_MODELS, SET_MT_QUEEN, SET_MT_SELECTED_MODELS,
} from './actions';

const defaultState = {
  isLoading: false,
  models: [],
  selectedModels: [null, null, null, null, null],
  isQueen: null,
  balance: 0,
  lastGame: {},
};

export const myteamReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_MT_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case SET_MT_MODELS: {
      return {
        ...state,
        models: action.payload,
      };
    }
    case SET_MT_SELECTED_MODELS: {
      return {
        ...state,
        selectedModels: action.payload,
      };
    }
    case SET_MT_QUEEN: {
      return {
        ...state,
        isQueen: action.payload,
      };
    }
    case SET_BALANCE_MY_TEAM: {
      return {
        ...state,
        balance: action.payload,
      };
    }
    case SET_LAST_GAME: {
      return {
        ...state,
        lastGame: action.payload,
      };
    }
    case RESET_MY_TEAM_STATE: {
      return {
        ...defaultState,
      };
    }
    default:
      return state;
  }
};
