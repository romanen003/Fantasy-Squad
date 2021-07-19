import {
  balanceMyTeamSelector,
  lastGameMyTeamSelector,
  queenModelSelector,
  selectedModelsListMyTeamSelector,
} from './selectors';

export const SET_MT_LOADING = 'SET_MT_LOADING';
export const setMyTeamLoadingAction = (payload) => ({ type: SET_MT_LOADING, payload });

export const SET_MT_MODELS = 'SET_MT_MODELS';
export const setMyTeamModelsAction = (payload) => ({ type: SET_MT_MODELS, payload });

export const SET_MT_SELECTED_MODELS = 'SET_MT_SELECTED_MODELS';
export const setMyTeamSelectedModels = (payload) => ({ type: SET_MT_SELECTED_MODELS, payload });

export const SET_MT_QUEEN = 'SET_MT_QUEEN';
export const setMtQueen = (payload) => ({ type: SET_MT_QUEEN, payload });

export const SET_BALANCE_MY_TEAM = 'SET_BALANCE_MY_TEAM';
export const setBalanceMyTeam = (payload) => ({ type: SET_BALANCE_MY_TEAM, payload });

export const SET_USERDATA_ACTION = 'SET_USERDATA_ACTION';
export const setUserDataAction = (payload) => ({ type: SET_USERDATA_ACTION, payload });

export const SET_AUTH_LOADING_ACTION = 'SET_AUTH_LOADING_ACTION';
export const setAuthLoadingAction = (payload) => ({ type: SET_AUTH_LOADING_ACTION, payload });

export const SET_FETCHED_ACTION = 'SET_FETCHED_ACTION';
export const setAuthFetchedAction = (payload) => ({ type: SET_FETCHED_ACTION, payload });

export const SET_LAST_GAME = 'SET_LAST_GAME';
export const setLastGameAction = (payload) => ({ type: SET_LAST_GAME, payload });

export const RESET_MY_TEAM_STATE = 'RESET_MY_TEAM_STATE';
export const resetMyTeamStateAction = () => ({ type: RESET_MY_TEAM_STATE });

export const requestModelListAction = (rarity, username) => (dispatch) => {
  dispatch(setMyTeamLoadingAction(true));

  return fetch(`https://fantazy-squad.com/api/models?rarity=${rarity}&username=${username}`)
    .then((response) => response.json())
    .then(({ models }) => {
      dispatch(setMyTeamModelsAction(models));
      dispatch(setMyTeamLoadingAction(false));
    });
};

const putModelInArray = (array, model) => {
  let put = false;

  return array.map((item) => {
    if (!item && !put) {
      put = true;
      return model;
    }
    return item;
  });
};

export const addModelAction = (model) => (dispatch, getState) => {
  const state = getState();
  const balance = balanceMyTeamSelector(state);
  const models = selectedModelsListMyTeamSelector(state);
  dispatch(setMyTeamSelectedModels(putModelInArray(models, model)));
  dispatch(setBalanceMyTeam(balance - model.cost));
};

export const setQueenAction = (id) => (dispatch) => {
  dispatch(setMtQueen(id));
};

export const deleteModelAction = (id, cost) => (dispatch, getState) => {
  const state = getState();
  const balance = balanceMyTeamSelector(state);
  const models = selectedModelsListMyTeamSelector(state);
  const queen = queenModelSelector(state);

  if (queen === id) {
    dispatch(setMtQueen(null));
  }

  dispatch(setMyTeamSelectedModels(models.map((item) => (item && item.id === id ? null : item))));
  dispatch(setBalanceMyTeam(balance + cost));
};

export const submitTeamAction = (history) => (dispatch, getState) => {
  const state = getState();
  const models = selectedModelsListMyTeamSelector(state);
  const queen = queenModelSelector(state);

  const result = {
    models: models.map((item, index) => ({
      id: item.id,
      place: index,
      queen: queen === item.id,
    })),
  };

  dispatch(setAuthLoadingAction(true));
  dispatch(setAuthFetchedAction(false));

  return fetch('https://fantazy-squad.com/api/my/command', {
    method: 'POST',
    body: JSON.stringify(result),
    credentials: 'include',
  })
    .then(() => fetch('https://fantazy-squad.com/api/game/start', {
      method: 'POST',
      credentials: 'include',
    }))
    .then(() => fetch('https://fantazy-squad.com/api/me', { credentials: 'include' }))
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
      dispatch(setBalanceMyTeam(data.user.balance));
    })
    .then(() => {
      dispatch(setAuthLoadingAction(false));
      dispatch(setAuthFetchedAction(true));
      history.replace('/my-game');
    });
};

export const PlayAgainAction = () => (dispatch, getState) => {
  const { id } = lastGameMyTeamSelector(getState());
  dispatch(setAuthLoadingAction(true));
  dispatch(setAuthFetchedAction(false));
  return fetch(`https://fantazy-squad.com/api/game/getPrize?gameId=${id}`, { credentials: 'include' })
    .then(() => fetch('https://fantazy-squad.com/api/me', { credentials: 'include' }))
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
      dispatch(setBalanceMyTeam(data.user.balance));
      dispatch(setLastGameAction({}));
    })
    .finally(() => {
      dispatch(setAuthLoadingAction(false));
      dispatch(setAuthFetchedAction(true));
    });
};
