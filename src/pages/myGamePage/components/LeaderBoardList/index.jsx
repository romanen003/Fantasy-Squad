import React, { useMemo } from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { leaderBoardSelector } from '../../../../app/mygame/selectors';
import { TokenIcon } from '../../../../components/icons/tokenIcon';
import { userDataSelector } from '../../../../app/auth/selectors';

export const LeaderBoardList = React.memo(() => {
  const LeaderBoard = useSelector(leaderBoardSelector);
  const { username } = useSelector(userDataSelector);

  const myTeam = useMemo(() => LeaderBoard.find((item) => item.username === username) || {},
    [LeaderBoard, username]);
  const MyPosition = [1, 2, 3].includes(myTeam.placeNumber) ? myTeam.placeNumber : 'others';

  return (
    <div className="LeaderBoardList">
      <ul className="LeaderBoardList__list">
        {LeaderBoard.map((item) => {
          const isTop = [1, 2, 3].includes(item.placeNumber) ? item.placeNumber : 'others';

          return (
            <li className="LeaderBoardList__listItem" key={item.username}>
              <div className={`LeaderBoardList__position LeaderBoardList__position_${isTop}`}>{item.placeNumber}</div>
              <div className="LeaderBoardList__username">{item.username}</div>
              <div className="LeaderBoardList__balance">{item.balance}</div>
              <div className="LeaderBoardList__prize">
                <TokenIcon />
                <span className="LeaderBoardList__prizeWrapper" />
                {item.prize}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="LeaderBoardList__myteam">
        <div className={`LeaderBoardList__position LeaderBoardList__position_${MyPosition}`}>{myTeam.placeNumber}</div>
        <div className="LeaderBoardList__username">{myTeam.username}</div>
        <div className="LeaderBoardList__balance">{myTeam.balance}</div>
        <div className="LeaderBoardList__prize">
          <TokenIcon />
          <span className="LeaderBoardList__prizeWrapper" />
          {myTeam.prize}
        </div>
      </div>
    </div>
  );
});
