import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface TicketsInterface {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

interface GetTicketsProps {
  condition?: string,
  order?: string,
}

// Define a service using a base URL and expected endpoints
export const ticketsApi = createApi({
  reducerPath: 'ticketsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64de1332825d19d9bfb20329.mockapi.io' }),
  endpoints: (builder) => ({
    getTickets: builder.query<TicketsInterface[], number>({
      query: (i) => (i === 0
        ? `/tickets?sortBy=price&order=desc`
        : i === 1 ? `/tickets?sortBy=price&order=asc`
          : `/tickets`),
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTicketsQuery, } = ticketsApi;