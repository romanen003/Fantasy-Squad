import React from 'react';
import './style.css';
import { GoldIcon } from './svg/goldIcon';
import { BronzeIcon } from './svg/bronzeIcon';
import { SilverIcon } from './svg/silverIcon';

/* eslint-disable */
export const Filters = ({ onFilterChangeClick }) => (
  <div className="Filters">
    <p className="Filters__text">Filter by rarity</p>
    <div className="Filters__wrapper">
      <div
        onClick={() => {
          onFilterChangeClick('gold');
        }}
        className="Filters__filter Filters__filter_gold"

      >
        <GoldIcon />
        <span className="Filters__cost">200</span>
      </div>
    </div>
    <div className="Filters__wrapper">
      <div
        className="Filters__filter Filters__filter_silver"
        onClick={() => {
          onFilterChangeClick('silver');
        }}
      >
        <SilverIcon />
        <span className="Filters__cost">100</span>
      </div>
    </div>
    <div className="Filters__wrapper">
      <div
        className="Filters__filter Filters__filter_bronze"
        onClick={() => {
          onFilterChangeClick('bronze');
        }}
      >
        <BronzeIcon />
        <span className="Filters__cost">50</span>
      </div>
    </div>
  </div>
);
