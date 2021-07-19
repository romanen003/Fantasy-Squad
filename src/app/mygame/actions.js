import { setBalanceMyTeam, setLastGameAction } from '../myteam/actions';
import { setUserDataAction } from '../auth/actions';

export const SET_GAME_DATA = 'SET_GAME_DATA';
export const setGameDataAction = (payload) => ({ type: SET_GAME_DATA, payload });

export const SET_LEADER_BOARD = 'SET_LEADER_BOARD';
export const setLeaderBoardAction = (payload) => ({ type: SET_LEADER_BOARD, payload });

export const SET_MY_TEAM_GAME = 'SET_MY_TEAM_GAME';
export const setMyTeamGame = (payload) => ({ type: SET_MY_TEAM_GAME, payload });

export const SET_LAST_EVENTS = 'SET_LAST_EVENTS';
export const setLastEvents = (payload) => ({ type: SET_LAST_EVENTS, payload });

export const SET_MY_GAME_LOADING = 'SET_MY_GAME_LOADING';
export const setMyGameLoading = (payload) => ({ type: SET_MY_GAME_LOADING, payload });

export const SET_FETCHED_MY_GAME = 'SET_FETCHED_MY_GAME';
export const setFetchedMyGame = (payload) => ({ type: SET_FETCHED_MY_GAME, payload });

export const REST_STATE_MY_GAME = 'REST_STATE_MY_GAME';
export const resetStateMyGameAction = () => ({ type: REST_STATE_MY_GAME });

export const requestGameInfoAction = (history, background) => (dispatch) => {
  if (!background) {
    dispatch(setMyGameLoading(true));
  }
  return fetch('https://fantazy-squad.com/api/game', { credentials: 'include' })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw Error('error');
    })
    .then((data) => {
      dispatch(setGameDataAction(data.game));
      dispatch(setLeaderBoardAction(data.leaderBoard));
      dispatch(setMyTeamGame(data.models));
      dispatch(setLastEvents(data.lastEvents));

      if (!background) {
        dispatch(setMyGameLoading(false));
        dispatch(setFetchedMyGame(true));
      }
    }).catch(() => fetch('https://fantazy-squad.com/api/me', { credentials: 'include' })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw Error('error');
      }).then((data) => {
        dispatch(setUserDataAction({
          username: data.user.username,
          balance: data.user.balance,
          returnLink: data.user.returnLink,
          command: data.command,
        }));
        dispatch(setLastGameAction(data.lastGame));
        dispatch(setBalanceMyTeam(data.user.balance));
        history.replace('/my-team');
      }));
};
