import React, { useCallback } from 'react';
import './style.css';
import { copyToClipboard } from '../../utils/copyToClipboard';

export const SaveGameLink = React.memo(({ returnLink = '' }) => {
  const handleShareGameClick = useCallback(() => {
    copyToClipboard(returnLink);
  }, [copyToClipboard, returnLink]);

  return (
    <button type="button" className="SaveGameLink" onClick={handleShareGameClick}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6" clipPath="url(#clip0)">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.00026 2.99969C8.00035 2.4475 8.44802 1.9999 9.00021 1.9999H17.0001C17.5524 1.9999 18.0001 2.4476 18.0001 2.99985V10.9994C18.0001 11.5517 17.5524 11.9994 17.0001 11.9994L14.0003 11.9993V8.9998C14.0003 7.34303 12.6572 5.99995 11.0004 5.99995H7.99977L8.00026 2.99969ZM5.99987 5.99995L6.00036 2.99936C6.00063 1.34278 7.34363 0 9.00021 0H17.0001C18.6569 0 20 1.34308 20 2.99985V10.9994C20 12.6562 18.6569 13.9993 17.0001 13.9993L14.0003 13.9992V16.9994C14.0003 18.6562 12.6572 19.9993 11.0004 19.9993H3.00083C1.34406 19.9993 0.000976562 18.6562 0.000976562 16.9994V8.99981C0.000976562 7.34303 1.34406 5.99995 3.00083 5.99995H5.99987ZM12.0004 12.9546C11.9997 12.9694 11.9994 12.9843 11.9994 12.9992C11.9994 13.0142 11.9997 13.029 12.0004 13.0438V16.9994C12.0004 17.5517 11.5527 17.9994 11.0004 17.9994H3.00083C2.44857 17.9994 2.00088 17.5517 2.00088 16.9994V8.99981C2.00088 8.44755 2.44857 7.99985 3.00083 7.99985H11.0004C11.5527 7.99985 12.0004 8.44755 12.0004 8.9998V12.9546Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="20" height="19.9994" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="SaveGameLink__text">Save your gamelink</span>
    </button>
  );
});
