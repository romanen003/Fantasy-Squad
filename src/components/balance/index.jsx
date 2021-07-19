import React from 'react';
import './style.css';
import { TokenIcon } from '../icons/tokenIcon';

export const Balance = React.memo(({ balance }) => (
  <div className="Balance">
    <TokenIcon />
    <span className="Balance__count">{balance}</span>
  </div>
));
