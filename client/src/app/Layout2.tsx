"use client"

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache(),
});


const Layout2 = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <ApolloProvider client={client}>
                {children}
            </ApolloProvider>
        </>
    )
}

export default Layout2;