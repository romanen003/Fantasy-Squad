import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { EmptyRound } from '../EmptyRound';
import { Modell } from './components/Model';
import { queenModelSelector, selectedModelsListMyTeamSelector } from '../../../../app/myteam/selectors';
import { setQueenAction, deleteModelAction } from '../../../../app/myteam/actions';
import { userDataSelector } from '../../../../app/auth/selectors';

export const TeamTable = ({
  teamName = 'Tipmasters', models, queen, setQueen, deleteModel, gameMode,
}) => {
  const ConnectedModel = ({ index, rightPosition }) => (
    <Modell
      rightPosition={rightPosition}
      gameMode={gameMode}
      model={models[index]}
      queen={queen === models[index].id}
      onMakeQueenClick={setQueen}
      onModelDeleteClick={deleteModel}
    />
  );

  return (
    <div className="MyTeamTable">
      <div className="MyTeamTable__top">
        {models[0] ? (
          <ConnectedModel rightPosition index={0} />
        ) : <EmptyRound />}
      </div>
      <div className="MyTeamTable__middle">
        {models[4] ? <ConnectedModel index={4} /> : <EmptyRound />}
        <div className="MyTeamTable__team">
          <p className="MyTeamTable__teamName">{teamName}</p>
          <p className="MyTeamTable__yourTeam">Your team</p>
        </div>
        {models[1] ? <ConnectedModel rightPosition index={1} /> : <EmptyRound />}
      </div>
      <div className="MyTeamTable__bottom">
        {models[3] ? <ConnectedModel index={3} /> : <EmptyRound />}
        {models[2] ? <ConnectedModel rightPosition index={2} /> : <EmptyRound />}
      </div>
    </div>
  );
};

export const TeamTableConnected = connect(
  (state) => ({
    models: selectedModelsListMyTeamSelector(state),
    queen: queenModelSelector(state),
    teamName: userDataSelector(state).username,
  }), { setQueen: setQueenAction, deleteModel: deleteModelAction },
)(TeamTable);
