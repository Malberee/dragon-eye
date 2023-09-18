import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dragonsApi = createApi({
  reducerPath: 'dragonsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65081ad556db83a34d9bc20d.mockapi.io/api/',
  }),
  endpoints: (build) => ({
    getDragons: build.query({
      query: () => 'dragons',
    }),
  }),
})

export const { useGetDragonsQuery } = dragonsApi
