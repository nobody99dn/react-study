import './index.css';
import { Typography, ThemeTypes } from '../Typography/index';

export enum RoomTypes {
  Kreuzberg = 'KREUZBERG',
  BrenzlauerBerg = 'PRENZLAUER BERG',
  Miite = 'MITTE'
}

interface CardProps {
  imageUrl: string;
  name: string;
  type: RoomTypes,
  square: number,
  room: number,
  price: number,
}

export const Card: React.FC<CardProps> = ({
  imageUrl,
  name,
  type,
  square,
  room,
  price,
}) => (
  <article className="post-content">
    <div className="card">
      <div className="card-img">
        <img src={imageUrl} alt={name} />
      </div>

      <div className="card-body">
        <div className="card-body-text">
          <div className="card-body-content">
            <p>
              <a href="javascript:void(0)" className="card-subtitle">
                <Typography theme={ThemeTypes.Outline}>sq.meters</Typography>
              </a>
            </p>

            <h5 className="card-title">
              <a href="javascript:void(0)">{name}</a>
            </h5>
          </div>
        </div>

        <div className="card-body-parameter display-center">
          <div className="card-body-info display-center">
            <Typography theme={ThemeTypes.Outline}>sq.meters</Typography>

            <Typography theme={ThemeTypes.Highlight}>{square}</Typography>
          </div>

          <div className="card-body-info display-center">
            <Typography theme={ThemeTypes.Outline}>rooms</Typography>

            <Typography theme={ThemeTypes.Highlight}>{room}</Typography>
          </div>

          <div className="card-body-info display-center">
            <Typography theme={ThemeTypes.Outline}>price</Typography>

            <Typography
              theme={ThemeTypes.Highlight}
            >
              {price}
              <sup>€</sup>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </article>
);
