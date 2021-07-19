export const leaderBoardSelector = (state) => state.mygame.leaderBoard;
export const myTeamGameSelector = (state) => state.mygame.team || [];
export const lastEventsSelector = (state) => state.mygame.lastEvents;
export const gameSelector = (state) => state.mygame.game || {};
export const loadingMyGameSelector = (state) => state.mygame.isLoading;
export const isFetchedMyGameSelector = (state) => state.mygame.isFetched;

export const queenTeamMyGameSelector = (state) => (
  myTeamGameSelector(state).find((item) => item.isQueen)
    || {}).id;

export const periodGameSelector = (state) => {
  const { startTime, endTime } = gameSelector(state);

  return { startTime, endTime };
};
