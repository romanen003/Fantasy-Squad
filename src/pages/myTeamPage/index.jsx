import React, { useCallback, useEffect } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { TeamTableConnected } from './components/TeamTable';
import { ModelsSearcherConnected } from './components/ModelsSearcher';
import { availableForGameSelector, balanceMyTeamSelector, lastGameMyTeamSelector } from '../../app/myteam/selectors';
import { submitTeamAction, PlayAgainAction, resetMyTeamStateAction } from '../../app/myteam/actions';
import { FantasySquadIcon } from '../../components/icons/fantasySquadIcon';
import { Balance } from '../../components/balance';
import { RewardModal } from './components/rewardModal';

const MyTeamPage = ({
  isGameAvailable, submitTeam, history, balance, lastGame, onPlayAgainClick, resetMyTeamState,
}) => {
  const handleSubmitTeamClick = useCallback(() => {
    submitTeam(history);
  }, [history, submitTeam]);

  useEffect(() => () => resetMyTeamState(), []);

  return (
    <div className="MyTeamPage">
      {lastGame
      && lastGame.placeNumber
      && <RewardModal lastGame={lastGame} onPlayAgainClick={onPlayAgainClick} />}
      <div className="MyTeamPage__wrapper">
        <div className="MyTeamPage__side">
          <div>
            <div className="MyTeamPage__balance">
              <FantasySquadIcon />
              <Balance balance={balance} />
            </div>
            <div className="MyTeamPage__squad">
              <TeamTableConnected />
            </div>
            <div className="MyTeamPage__play">
              <button
                onClick={handleSubmitTeamClick}
                disabled={!isGameAvailable}
                className="MyTeamPage__playBtn"
                type="button"
              >
                Play now
              </button>
            </div>
          </div>
        </div>
        <div className="MyTeamPage__side MyTeamPage__side_right">
          <div>
            <ModelsSearcherConnected />
          </div>
        </div>
      </div>
    </div>
  );
};

export const MyTeamPageConnected = connect((state) => ({
  balance: balanceMyTeamSelector(state),
  isGameAvailable: availableForGameSelector(state),
  lastGame: lastGameMyTeamSelector(state),
}), {
  submitTeam: submitTeamAction,
  onPlayAgainClick: PlayAgainAction,
  resetMyTeamState: resetMyTeamStateAction,
})(MyTeamPage);
