import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
    notifyOnNetworkStatusChange: true,
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
  mutate: {
    errorPolicy: "all",
  },
};

export const moviesClient = new ApolloClient({
  uri: "http://localhost:5000/graphql", // CHANGE TO ENV
  cache,
  defaultOptions,
});
