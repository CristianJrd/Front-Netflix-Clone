import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import FormMe from './formMe';

const GET_ME = gql`
    query{
        me{
            name,
            lastname,
            email,
            birth_date,
            password,
            gender,
            avatar,
            suscription{
                suscription_type
            }
        }
    }
`

class Me extends Component {
    render() { 
        return ( 
            <Query query={GET_ME}>
                {({loading,err,data}) => {
                    if (loading) return (<h4>Loading...</h4>)
                    if (err) return (<h4>{err}</h4>)
                    return <FormMe data={data.me} />
                }}
            </Query>
         );
    }
}
 
export default Me