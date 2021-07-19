import React, { useCallback, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import './style.css';
import { FantasySquadIcon } from '../../components/icons/fantasySquadIcon';
import { Balance } from '../../components/balance';
import { PerformPoints } from '../../components/PerformPoints';
import { SaveGameLink } from '../../components/saveGameLink';
import { requestGameInfoAction, resetStateMyGameAction } from '../../app/mygame/actions';
import {
  isFetchedMyGameSelector,
  loadingMyGameSelector,
  myTeamGameSelector,
  queenTeamMyGameSelector,
} from '../../app/mygame/selectors';
import { LoadingPage } from '../loadingPage';
import { TeamTable } from '../myTeamPage/components/TeamTable';
import { LeaderBoardTime } from './components/leaderBoardTime';
import { LeaderBoardList } from './components/LeaderBoardList';
import { userDataSelector } from '../../app/auth/selectors';
import { LastEvents } from './components/LastEvents';
import { ShareIcon } from '../../components/icons/shareIcon';
import { copyToClipboard } from '../../utils/copyToClipboard';

const MyGamePage = ({
  requestGameInfo, isLoading,
  team, queen, username, isFetched, history, returnLink, resetStateMyGame,
}) => {
  const { balance } = useSelector(userDataSelector);
  useEffect(() => {
    const timeoutId = setInterval(() => {
      requestGameInfo(history, true);
    }, 2000);

    requestGameInfo();

    return () => clearInterval(timeoutId);
  }, []);

  useEffect(() => () => resetStateMyGame(), []);

  const handleShareGameClick = useCallback(() => {
    copyToClipboard('share game');
  }, [copyToClipboard]);

  return (isLoading || !isFetched) ? <LoadingPage /> : (
    <div className="MyGame">
      <div className="MyGame__leftSide">
        <div className="MyGame__topBalance">
          <FantasySquadIcon />
          <div className="MyGame__saveGame">
            <SaveGameLink returnLink={returnLink} />
          </div>
          <div className="MyGame__perform">
            <PerformPoints />
          </div>
          <Balance balance={balance} />
        </div>
        <div className="MyGame__myTeam">
          <TeamTable teamName={username} gameMode models={team} queen={queen} />
        </div>
        <div className="MyGame__shareWrapper">
          <button onClick={handleShareGameClick} type="button" className="MyGame__shareBtn">
            0
            <ShareIcon />
          </button>
        </div>
        <div className="MyGame__lastEvents">
          <LastEvents />
        </div>
      </div>
      <div className="MyGame__rightSide">
        <LeaderBoardTime />
        <LeaderBoardList />
      </div>
    </div>
  );
};

export const MyGamePageConnected = connect(
  (state) => ({
    isLoading: loadingMyGameSelector(state),
    team: myTeamGameSelector(state),
    queen: queenTeamMyGameSelector(state),
    username: userDataSelector(state).username,
    returnLink: userDataSelector(state).returnLink,
    isFetched: isFetchedMyGameSelector(state),
  }),
  {
    requestGameInfo: requestGameInfoAction,
    resetStateMyGame: resetStateMyGameAction,
  },
)(MyGamePage);
