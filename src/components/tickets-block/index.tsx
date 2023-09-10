import React, { FC } from 'react'
import style from './index.module.scss'
import { TicketsInterface, useGetTicketsQuery} from 'redux/api/ticketsApi'
import { Ticket } from 'components/ticket'

interface TicketsBlockProps {
  selectedTransfers: number[],
  activeIndexOFCurrency: number,
  activeIndexOfFiltering: number,
}

export const TicketsBlock: FC<TicketsBlockProps> = ({ selectedTransfers, activeIndexOFCurrency, activeIndexOfFiltering }) => {
  const { data, isFetching } = useGetTicketsQuery(activeIndexOfFiltering);

  function filterTicketsByStops(data: TicketsInterface[], stops: number[]) {
    return data.filter(ticket => stops.includes(ticket.stops));
  }

  const filteringData = data && filterTicketsByStops(data, selectedTransfers);

  return (
    <section className={style.block}>
      <div className={style.body}>
        {isFetching
          ? <div>Идет загрузка билетов...</div>
          : filteringData
            ? filteringData.map(ticket =>
              <Ticket
                price={ticket.price}
                origin={ticket.origin}
                origin_name={ticket.origin_name}
                destination={ticket.destination}
                destination_name={ticket.destination_name}
                departure_date={ticket.departure_date}
                departure_time={ticket.departure_time}
                arrival_date={ticket.arrival_date}
                arrival_time={ticket.arrival_time}
                stops={ticket.stops}
                activeIndexOFCurrency={activeIndexOFCurrency}
              />
            )
            : <div>Упс... кажется что-то пошло не так</div>
        }
      </div>
    </section>
  );
};
