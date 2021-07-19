import { userDataSelector } from '../auth/selectors';

export const rootState = (state) => state.myteam;
export const isLoadingMyTeamSelector = (state) => state.myteam.isLoading;
export const ModelsListMyTeamSelector = (state) => state.myteam.models;
export const selectedModelsListMyTeamSelector = (state) => state.myteam.selectedModels;
export const queenModelSelector = (state) => state.myteam.isQueen;
export const balanceMyTeamSelector = (state) => state.myteam.balance;
export const lastGameMyTeamSelector = (state) => state.myteam.lastGame;

export const availableForGameSelector = (state) => {
  const isAllSelected = state.myteam.selectedModels.every(Boolean);
  const isAmountCorrect = state.myteam.selectedModels.reduce(
    (acc, item) => (item && item.cost ? acc + item.cost : acc), 0,
  ) <= userDataSelector(state).balance;
  const isQueenSelected = state.myteam.isQueen !== null;

  return isAllSelected && isAmountCorrect && isQueenSelected;
};

export const selectedIdsModelsSelector = (state) => {
  const selectedModels = selectedModelsListMyTeamSelector(state);

  return selectedModels.reduce((acc, item) => (item && item.id ? [...acc, item.id] : acc), []);
};
