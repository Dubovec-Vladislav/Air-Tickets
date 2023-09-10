import React, { FC } from 'react'
import style from './index.module.scss'
import plane from './plane.png'

interface TicketProps {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  stops: number;
  price: number;
}

export const Ticket: FC<TicketProps> = (
  { price, origin, origin_name, destination, destination_name, departure_date, departure_time, arrival_date, arrival_time, stops }
) => {
  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.left}>
          <img src={"data:image/png;base64,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"} alt="COMPANY" />
          <div className={style.btn}>Купить за {price}₽</div>
        </div>
        <div className={style.right}>
          <div className={style.departure}>
            <div className={style.departureTime}>{departure_time}</div>
            <div className={style.originName}>{origin}, {origin_name}</div>
            <div className={style.departureDate}>{departure_date}</div>
          </div>
          <div className={style.stops}>
            {stops} пересадка(-и)
            <div className={style.planeLine}><span></span><img src={plane} alt="plane" /></div>
          </div>
          <div className={style.arrival}>
            <div className={style.arrivalTime}>{arrival_time}</div>
            <div className={style.originName}>{destination}, {destination_name}</div>
            <div className={style.arrivalDate}>{arrival_date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
