import React from 'react';
import './style.css';

export const EmptyRound = () => (
  <svg className="EmptyRound" width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <circle cx="80" cy="80" r="60" fill="white" />
      <circle cx="80" cy="80" r="50" fill="#5B24A2" fillOpacity="0.8" />
      <circle cx="80" cy="80.2132" r="15" transform="rotate(45 80 80.2132)" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M81 74.5563C81 74.004 80.5523 73.5563 80 73.5563C79.4477 73.5563 79 74.004 79 74.5563L79 79.2132L74.3431 79.2132C73.7909 79.2132 73.3431 79.6609 73.3431 80.2132C73.3431 80.7655 73.7909 81.2132 74.3431 81.2132H79L79 85.87C79 86.4223 79.4477 86.87 80 86.87C80.5523 86.87 81 86.4223 81 85.87L81 81.2132L85.6569 81.2132C86.2091 81.2132 86.6569 80.7655 86.6569 80.2132C86.6569 79.6609 86.2091 79.2132 85.6569 79.2132L81 79.2132L81 74.5563Z" fill="#5B24A2" />
    </g>
    <defs>
      <filter id="filter0_d" x="0" y="0" width="160" height="160" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset />
        <feGaussianBlur stdDeviation="10" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>

);
