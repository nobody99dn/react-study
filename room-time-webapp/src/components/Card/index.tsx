import React from 'react';

import './index.css';

import { Typography, VariantsTypes } from '../Typography/index';

import { Currency, RoomTypes } from '../../constants/type';

interface CardProps {
  imageUrl: string;
  title: string;
  roomType: RoomTypes,
  square: number,
  room: number,
  price: number,
  currency?: Currency;
}

export const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  roomType,
  square,
  room,
  price,
  currency = Currency.Dollar
}) => (
  <article className="post-content">
    <div className="card">
      <div className="card-img">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="card-body">
        <div className="card-body-text">
          <div className="card-body-content">
            <p>
              <a href="javascript:void(0)" className="card-subtitle">
                <Typography variant={VariantsTypes.Outline}>{roomType}</Typography>
              </a>
            </p>

            <h5 className="card-title">
              <a href="javascript:void(0)">{title}</a>
            </h5>
          </div>
        </div>

        <div className="card-body-parameter display-center">
          <div className="card-body-info display-center">
            <Typography variant={VariantsTypes.Outline}>sq.meters</Typography>

            <Typography variant={VariantsTypes.Highlight}>{square}</Typography>
          </div>

          <div className="card-body-info display-center">
            <Typography variant={VariantsTypes.Outline}>rooms</Typography>

            <Typography variant={VariantsTypes.Highlight}>{room}</Typography>
          </div>

          <div className="card-body-info display-center">
            <Typography variant={VariantsTypes.Outline}>price</Typography>

            <Typography
              variant={VariantsTypes.Highlight}
            >
              {price}
              <sup>{currency}</sup>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </article>
);
