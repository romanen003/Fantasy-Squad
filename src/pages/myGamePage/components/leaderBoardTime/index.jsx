import React, { useEffect, useState } from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { getCurrentTime } from './utils';
import { periodGameSelector } from '../../../../app/mygame/selectors';

export const LeaderBoardTime = React.memo(() => {
  const { startTime, endTime } = useSelector(periodGameSelector);
  const [time, setTime] = useState(getCurrentTime(endTime));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime(endTime));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="LeaderBoardTime">
      <div>
        <h2 className="LeaderBoardTime__header">Leaderboard</h2>
        <span className="LeaderBoardTime__period">{`${startTime} — ${endTime}`}</span>
      </div>
      <div>
        <div className="LeaderBoardTime__timer">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM6 2C6.27614 2 6.5 2.22386 6.5 2.5V5.5H8.5C8.77614 5.5 9 5.72386 9 6C9 6.27614 8.77614 6.5 8.5 6.5H6C5.72386 6.5 5.5 6.27614 5.5 6V2.5C5.5 2.22386 5.72386 2 6 2Z" fill="white" />
          </svg>
          <span className="LeaderBoardTime__time">{time}</span>
        </div>
      </div>
    </div>
  );
});
