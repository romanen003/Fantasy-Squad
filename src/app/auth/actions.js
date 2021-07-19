import { setBalanceMyTeam, setLastGameAction } from '../myteam/actions';

export const SET_AUTH_ACTION = 'SET_AUTH_ACTION';
export const setAuthAction = (payload) => ({ type: SET_AUTH_ACTION, payload });

export const SET_USERDATA_ACTION = 'SET_USERDATA_ACTION';
export const setUserDataAction = (payload) => ({ type: SET_USERDATA_ACTION, payload });

export const SET_AUTH_LOADING_ACTION = 'SET_AUTH_LOADING_ACTION';
export const setAuthLoadingAction = (payload) => ({ type: SET_AUTH_LOADING_ACTION, payload });

export const SET_FETCHED_ACTION = 'SET_FETCHED_ACTION';
export const setAuthFetchedAction = (payload) => ({ type: SET_FETCHED_ACTION, payload });

export const requestAuthAction = (history) => (dispatch) => {
  dispatch(setAuthFetchedAction(false));
  dispatch(setAuthLoadingAction(true));

  return fetch('https://fantazy-squad.com/api/me', { credentials: 'include' })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw Error('error');
    })
    .then((data) => {
      dispatch(setUserDataAction({
        username: data.user.username,
        balance: data.user.balance,
        returnLink: data.user.returnLink,
        command: data.command,
      }));
      dispatch(setLastGameAction(data.lastGame));
      dispatch(setBalanceMyTeam(data.user.balance));
      dispatch(setAuthAction(true));
      return data.game.id ? history.push('/my-game') : history.push('/my-team');
    })
    .catch(() => {
      history.push('/login');
    })
    .finally(() => {
      dispatch(setAuthLoadingAction(false));
      dispatch(setAuthFetchedAction(true));
    });
};

export const requestSignUpAction = ({ username, history, email }) => (dispatch) => {
  dispatch(setAuthLoadingAction(true));

  return fetch(
    'https://fantazy-squad.com/api/register',
    { method: 'POST', body: JSON.stringify(email ? { username, email } : { username }), credentials: 'include' },
  ).then(({ status }) => {
    if (status === 200) {
      dispatch(setAuthAction(true));
      history.push('/my-team');
    }
  })
    .finally(() => {
      dispatch(setAuthLoadingAction(false));
      dispatch(setAuthFetchedAction(true));
    });
};
