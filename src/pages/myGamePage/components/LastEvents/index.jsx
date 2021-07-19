import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { lastEventsSelector } from '../../../../app/mygame/selectors';

export const LastEvents = () => {
  const events = useSelector(lastEventsSelector);

  return (
    <div className="LastEvents">
      <h3 className="LastEvents__header">Perform Points history</h3>
      <div className="LastEvents__wrapper">
        <ul className="LastEvents__list">
          {events.map((item) => (
            <li className="LastEvents__listItem" key={item.username + item.type}>
              <div className="LastEvents__itemTime">{item.time}</div>
              <div className="LastEvents__itemUsername">{item.username}</div>
              <div className="LastEvents__itemType">{item.type}</div>
              <div className="LastEvents__points">{`+${item.points}`}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
