import React, { useCallback } from 'react';
import './style.css';
import { ModelStatus } from '../../../../components/modelStatus';

export const Model = ({
  item: {
    profileImage, username, status, rarity, cost,
  }, item, onModelClick, disabledForSelecting, selected,
}) => {
  const handleModelClick = useCallback(() => {
    onModelClick(item);
  }, [onModelClick, item]);

  return (
    <div className="Model">
      <div className={`Model__round Model__round_${rarity} ${selected ? 'Model__round_white' : ''}`}>
        <img className="Model__img" src={profileImage} alt={username} />
        {!disabledForSelecting && !selected && <button className="Model_btn" type="button" onClick={handleModelClick}>+</button>}
      </div>
      <span className="Model_username">{username}</span>
      {!selected && <div className="Model__costWrapper">{cost}</div>}
      <div className="Model__status">
        <ModelStatus status={status} />
      </div>
    </div>
  );
};
