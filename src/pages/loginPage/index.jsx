import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { requestSignUpAction } from '../../app/auth/actions';
import { FantasySquadLoginIcon } from '../../components/icons/fantasySquadLoginIcon';
import { StripchatLoginIcon } from '../../components/icons/stripchatLoginIcon';
import { CloseMIcon } from '../../components/icons/closeMIcon';
import { BtnLoginIcon } from '../../components/icons/btnLoginIcon';
import { TokenLoginIcon } from '../../components/icons/tokenLoginIcon';
import { TokensLoginIcon } from '../../components/icons/tokensLoginIcon';
import { EmailLoginIcon } from '../../components/icons/emailLoginIcon';

const LoginPage = ({ requestSignUp, history }) => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [showEmail, setShowingEmail] = useState(false);

  const handleUsernameChange = useCallback((event) => {
    setUserName(event.target.value);
  }, []);
  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);
  const HandleSubmitClick = useCallback(() => {
    requestSignUp({ username, history, email });
  }, [username, history, email]);

  const handleShowEmailClick = useCallback(() => {
    setShowingEmail(true);
  }, [setShowingEmail]);

  return (
    <div className="Login">
      <div className="Login__content">
        <div className="Login__leftside">
          <div className="Login__icons">
            <FantasySquadLoginIcon />
            <CloseMIcon />
            <StripchatLoginIcon />
          </div>
          <p className="Login__title">
            In collaboration with one of the most popular webcam
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            website, we have reimagined the usual format of the "Fantasy Football"
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            game series and replaced players with the models. Sounds interesting, doesn't it?
          </p>
          <p className="Login__description">
            Assemble your dream team and win prizes every hour!
          </p>
          <div className="Login__widgetWrapper">
            <div className="Login__widget">
              <TokenLoginIcon />
              <span className="Login__widgetText">
                50 welcome tokens on Stripchat
                for each Fantasy Squad player
              </span>
            </div>
          </div>
          <div className="Login__widgetWrapper">
            <div className="Login__widget Login__widget_gold">
              <TokensLoginIcon />
              <span className="Login__widgetText">
                Top 3 players of the week
                will share 500 Stripchat tokens
              </span>
            </div>
          </div>
        </div>
        <div className="Login__rightside">
          <h2 className="Login__start">Start right now</h2>
          <div className="Login__loginWrapper Login__loginWrapper_moreMargin">
            <input
              onChange={handleUsernameChange}
              placeholder="Fantasy team name"
              className="Login__input"
              type="input"
            />
            {!showEmail && (
              <button disabled={username.length < 4} className="Login__btn" type="button" onClick={HandleSubmitClick}>
                <BtnLoginIcon />
              </button>
            )}
          </div>
          <div className="Login__loginWrapper">
            {showEmail ? (
              <>
                <input
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className="Login__input"
                  type="input"
                />
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button disabled={username.length < 4 || email.length < 4} className="Login__btn" type="button" onClick={HandleSubmitClick}>
                  <BtnLoginIcon />
                </button>
              </>
            ) : (
              <button onClick={handleShowEmailClick} type="button" className="Login__btnEmail">
                <EmailLoginIcon />
                <span className="Login__btnText">Add email to save your squad</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoginPageConnected = connect(
  (state) => ({ auth: state.auth }),
  { requestSignUp: requestSignUpAction },
)(LoginPage);
