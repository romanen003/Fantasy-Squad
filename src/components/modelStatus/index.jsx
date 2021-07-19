import React from 'react';
import './style.css';

export const ModelStatus = React.memo(({ status }) => (
  <div className={`Status Status_${status}`} />
));
