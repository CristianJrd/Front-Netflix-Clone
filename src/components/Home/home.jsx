import React, { Component } from 'react';
import NavBar from '../NavBar/navBar'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import './home.css'
import Movie from './Movie/movie';

const QUERY_ME = gql`
    query me{
        me{
            name
        }
    }
`

const QUERY_MOVIES = gql`
    query movies{
        movies{
            id
            title
            poster
        }
    }
`

class Home extends Component {
    constructor(props){
        super(props)
        this.state = { 
            nombre:"asdf"
         }
    }

    getMe = () => (
        <Query query={QUERY_ME}>
            {({loading,err,data}) => {
                if(loading) return 'Loading...'
                if(err) return 'Error del servicio'
                return <NavBar name={data.me.name} />
            }}
        </Query>
    )

    renderMovies = () =>(
        <Query query={QUERY_MOVIES}>
            {
                ({loading,err,data}) => {
                    if(loading) return 'Loading movies...'
                    if(err) return 'Error del servicio'
                    return data.movies.map(movie => <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} />)
                }
            }
        </Query>
    )

    render() { 
        return (
            <div className="cover">
                {this.getMe()}
            <div className="row container-fluid">
            {this.renderMovies()}    
            </div>
                
            </div>
         );
    }
}
 
export default Home;