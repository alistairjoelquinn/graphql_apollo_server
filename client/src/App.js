import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import logo from './logo.jpg';

const client = new ApolloClient({
    uri: 'https://localhost:5000/graphql'
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <div className="container">
                <img src={logo} alt="SpaceX" style={styles.image} />
            </div>
        </ApolloProvider>
    );
};

const styles = {
    image: {
        width: 300,
        display: 'block',
        margin: 'auto',
    }
};

export default App;
