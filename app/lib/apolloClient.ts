import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://7f6a635d-cf6b-6fbf-93b6-b9af9c83789c.mtayo.net/graphql",
    cache: new InMemoryCache(),
})

export default client;