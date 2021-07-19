import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { gameSelector } from '../../app/mygame/selectors';

export const PerformPoints = React.memo(() => {
  const { points = 0 } = useSelector(gameSelector);

  return (
    <div className="PerformPoints">
      <span className="PerformPoints__text">Perform Points</span>
      <span className="PerformPoints__points">{points}</span>
    </div>
  );
});
