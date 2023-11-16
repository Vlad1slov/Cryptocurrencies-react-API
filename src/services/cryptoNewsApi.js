// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoNewsHeaders = {
//     "X-RapidAPI-Key": "a5c8cd6ab2msha6b5551b717edaap14764fjsn84c91deaa288",
//     "X-RapidAPI-Host": "news67.p.rapidapi.com",
// };

// const baseUrl = "https://news67.p.rapidapi.com/v2/crypto";

// const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// export const cryptoNewsApi = createApi({
//     reducerPath: "cryptoNewsApi",
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//         getCryptoNews: builder.query({
//             query: () => createRequest("/news"),
//         }),
//     }),
// });

// export const { useGetCryptoNewsQuery } = cryptoNewsApi;
