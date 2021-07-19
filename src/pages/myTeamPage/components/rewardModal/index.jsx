import React from 'react';
import './style.css';
import { ResetIcon } from '../../../../components/icons/ResetIcon';

export const RewardModal = ({ lastGame, onPlayAgainClick }) => (
  <div className="RewardModalWrapper">
    <div className="RewardModal">
      <h2 className="RewardModal__header">Congratulations!</h2>
      <span className="RewardModal__description">
        You finished in the
        {' '}
        <span className="RewardModal__placeNumber">{lastGame.placeNumber}</span>
        {' '}
        position
        with
        {' '}
        <span className="RewardModal__placeNumber">{lastGame.points}</span>
        {' '}
        Perform Points.
      </span>
      <div className="RewardModal__won">YOU WON</div>
      <div className="RewardModal__stripchat">
        50 welcome tokens on Stripchat
        <a href="https://stripchat.com/" className="RewardModal__stripBtn" target="_blank" rel="noreferrer">Collect</a>
      </div>
      <div className="RewardModal__gems">
        {lastGame.prize}
        {' '}
        Fantasy Squad gems
      </div>
      <div className="RewardModal__separator" />
      <button type="button" className="RewardModal__again" onClick={onPlayAgainClick}>
        <ResetIcon />
        <span className="RewardModal__againText">Play again</span>
      </button>
    </div>
  </div>
);
