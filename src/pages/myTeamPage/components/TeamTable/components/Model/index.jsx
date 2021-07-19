import React, { useCallback } from 'react';
import './style.css';
import { ModelStatus } from '../../../../../../components/modelStatus';
import { TokenIcon } from '../../../../../../components/icons/tokenIcon';

export const Modell = ({
  model: {
    rarity, profileImage, username, id, cost, status, gamePoints,
  }, queen, onModelDeleteClick, onMakeQueenClick, gameMode, rightPosition,
}) => {
  const handleModelDeleteClick = useCallback(() => {
    onModelDeleteClick(id, cost);
  }, [onModelDeleteClick, id]);
  const handleMakeQueenClick = useCallback(() => {
    onMakeQueenClick(id);
  }, [onMakeQueenClick, id]);

  return (
    <div className="Modell">
      <div className={`Modell__round Modell__round_${rarity}`}>
        <img className="Modell__img" src={profileImage} alt={username} />
      </div>
      {!gameMode && (
      <button type="button" className="Modell_btn" onClick={handleModelDeleteClick}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="15" fill="white" fillOpacity="0.1" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7071 10.2929C11.3166 9.90237 10.6834 9.90237 10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071L13.5858 15L10.2929 18.2929C9.90237 18.6834 9.90237 19.3166 10.2929 19.7071C10.6834 20.0976 11.3166 20.0976 11.7071 19.7071L15 16.4142L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L16.4142 15L19.7071 11.7071C20.0976 11.3166 20.0976 10.6834 19.7071 10.2929C19.3166 9.90237 18.6834 9.90237 18.2929 10.2929L15 13.5858L11.7071 10.2929Z"
            fill="white"
          />
        </svg>
      </button>
      )}
      {queen ? (
        <div className="Modell__queen">
          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.6801 6.89054C31.5735 6.83462 31.4529 6.8149 31.3351 6.83415C31.2173 6.8534 31.1082 6.91066 31.0232 6.99789L24.1231 14.0885L16.4977 0.271009C16.4419 0.187356 16.3676 0.119023 16.281 0.0718338C16.1945 0.0246449 16.0983 0 16.0007 0C15.9031 0 15.8069 0.0246449 15.7204 0.0718338C15.6339 0.119023 15.5595 0.187356 15.5038 0.271009L7.8783 14.0885L0.978252 6.99789C0.89329 6.90778 0.783095 6.8482 0.663582 6.82775C0.544068 6.8073 0.421422 6.82704 0.313355 6.88412C0.205288 6.94119 0.117393 7.03265 0.0623662 7.14529C0.00733886 7.25793 -0.0119735 7.38591 0.00721797 7.51075L2.292 23.4931C2.31266 23.6353 2.38184 23.7649 2.48681 23.858C2.59177 23.9512 2.72545 24.0016 2.8632 24H29.1382C29.276 24.0016 29.4097 23.9512 29.5146 23.858C29.6196 23.7649 29.6888 23.6353 29.7094 23.4931L31.9942 7.51075C32.0114 7.38598 31.9902 7.25874 31.9337 7.14731C31.8773 7.03588 31.7885 6.94599 31.6801 6.89054Z" fill="#FFA800" />
          </svg>
        </div>
      ) : !gameMode && (
        <button type="button" className="Modell__makeQueen" onClick={handleMakeQueenClick}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="15" fill="white" fillOpacity="0.1" />
            <path
              d="M22.84 11.4453C22.7868 11.4173 22.7265 11.4075 22.6676 11.4171C22.6087 11.4267 22.5541 11.4553 22.5116 11.4989L19.0616 15.0443L15.2488 8.1355C15.2209 8.09368 15.1838 8.05951 15.1405 8.03592C15.0973 8.01232 15.0492 8 15.0004 8C14.9515 8 14.9035 8.01232 14.8602 8.03592C14.8169 8.05951 14.7798 8.09368 14.7519 8.1355L10.9392 15.0443L7.48913 11.4989C7.44665 11.4539 7.39155 11.4241 7.33179 11.4139C7.27203 11.4036 7.21071 11.4135 7.15668 11.4421C7.10264 11.4706 7.0587 11.5163 7.03118 11.5726C7.00367 11.629 6.99401 11.693 7.00361 11.7554L8.146 19.7465C8.15633 19.8176 8.19092 19.8824 8.2434 19.929C8.29589 19.9756 8.36272 20.0008 8.4316 20H21.5691C21.638 20.0008 21.7048 19.9756 21.7573 19.929C21.8098 19.8824 21.8444 19.8176 21.8547 19.7465L22.9971 11.7554C23.0057 11.693 22.9951 11.6294 22.9669 11.5737C22.9386 11.5179 22.8942 11.473 22.84 11.4453Z"
              fill="#FFA800"
            />
          </svg>
        </button>
      )}
      {!gameMode && (
      <div className="Modell__cost">
        <TokenIcon />
        <span className="Modell__price">{cost}</span>
      </div>
      )}
      <div className="Modell__status">
        <ModelStatus status={status} />
      </div>
      {gameMode && (
        <div className={`Modell__gamePoints ${rightPosition ? 'Modell__gamePoints_right' : 'Modell__gamePoints_left'}`}>
          <span className="Modell__plus">+</span>
            {gamePoints}
        </div>
      )}
      {gameMode && (
        <a className="Modell__link" href={`https://stripchat.com/${username}`} target="_blank" rel="noreferrer">
            {username.length > 10 ? `${username.slice(0, 10)}...` : username}
          <svg className="Modell__externalLink" width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.5 1.5C0.5 0.671573 1.17157 0 2 0H4C4.27614 0 4.5 0.223858 4.5 0.5C4.5 0.776142 4.27614 1 4 1H2C1.72386 1 1.5 1.22386 1.5 1.5V8.5C1.5 8.77614 1.72386 9 2 9H9C9.27614 9 9.5 8.77614 9.5 8.5V6.5C9.5 6.22386 9.72386 6 10 6C10.2761 6 10.5 6.22386 10.5 6.5V8.5C10.5 9.32843 9.82843 10 9 10H2C1.17157 10 0.5 9.32843 0.5 8.5V1.5ZM9.5 1.70711L6.35355 4.85355C6.15829 5.04882 5.84171 5.04882 5.64645 4.85355C5.45118 4.65829 5.45118 4.34171 5.64645 4.14645L8.79289 1H7C6.72386 1 6.5 0.776142 6.5 0.5C6.5 0.223858 6.72386 0 7 0H9.5C10.0523 0 10.5 0.447715 10.5 1V3.5C10.5 3.77614 10.2761 4 10 4C9.72386 4 9.5 3.77614 9.5 3.5V1.70711Z" fill="white" fillOpacity="0.6" />
          </svg>
        </a>
      )}
    </div>
  );
};
