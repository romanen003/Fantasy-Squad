import React from 'react';
import './styles.css';

export const LoadingPage = () => (
  <div className="Loading">
    <div className="Loading_opacity">
      <div className="Loading__Loader">
        <svg className="Loading__svg" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M117 60C118.657 60 120.008 58.6559 119.925 57.0011C119.384 46.1868 115.924 35.6997 109.888 26.6658C103.295 16.7988 93.9246 9.10849 82.961 4.56723C71.9974 0.02597 59.9334 -1.16223 48.2946 1.15288C36.6557 3.468 25.9647 9.18244 17.5736 17.5736C9.18244 25.9647 3.468 36.6557 1.15288 48.2946C-1.16223 59.9334 0.0259702 71.9974 4.56723 82.961C9.10849 93.9246 16.7988 103.295 26.6658 109.888C35.6997 115.924 46.1868 119.384 57.0011 119.925C58.6559 120.008 60 118.657 60 117C60 115.343 58.6558 114.009 57.0015 113.917C47.3746 113.381 38.0464 110.276 29.9992 104.899C21.119 98.9658 14.1976 90.5321 10.1105 80.6649C6.02337 70.7977 4.95399 59.9401 7.03759 49.4651C9.1212 38.9902 14.2642 29.3683 21.8162 21.8162C29.3683 14.2642 38.9901 9.1212 49.4651 7.03759C59.9401 4.95399 70.7977 6.02337 80.6649 10.1105C90.5321 14.1976 98.9658 21.119 104.899 29.9992C110.276 38.0463 113.381 47.3746 113.917 57.0015C114.009 58.6558 115.343 60 117 60Z" fill="white" />
        </svg>
      </div>
    </div>
  </div>
);