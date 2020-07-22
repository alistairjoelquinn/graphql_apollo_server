import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

const Launches = () => {
    return (
        <div>
            <h1 className="display-4 my-3">Launches</h1>
            <Query query={LAUNCHES_QUERY}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log('error in launches query: ', error);
                        console.log('data: ', data);
                        return <h1>test</h1>;
                    }
                }
            </Query>
        </div>
    );
};

export default Launches;