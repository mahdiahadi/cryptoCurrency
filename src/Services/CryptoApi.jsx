import {fetchBaseQuery,createApi} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'x-rapidapi-host':'coinranking1.p.rapidapi.com',
  'x-rapidapi-key':'543849b09dmsha31a824760c3d19p1b1089jsndfeaec21e701'
}
const baseUrl='https://coinranking1.p.rapidapi.com'

  const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
  export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      }),
      getCryptoDetails:builder.query({
        query:(coinId)=>createRequest(`/coin/${coinId}`)
      }),
      getCryptoHistory:builder.query({
        query:({coinId,timePeriod})=>createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`)
      }),
      getExchanges: builder.query({
        query: () => createRequest('/exchanges'),
      }),
    }),
  });
  export const {
    useGetCryptosQuery,
    useGetCryptoHistoryQuery,
    useGetCryptoDetailsQuery,
    useGetExchangesQuery,
    
}=cryptoApi;
  