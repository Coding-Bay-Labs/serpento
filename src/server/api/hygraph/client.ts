import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { env } from "@/env.mjs";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: env.HYGRAPH_ENDPOINT,
    headers: {
      Authorization: `Bearer ${env.HYGRAPH_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
  },
});
