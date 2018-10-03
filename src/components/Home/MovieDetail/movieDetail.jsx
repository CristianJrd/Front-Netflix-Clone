import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import YouTube from 'react-youtube'

const QUERY_MOVIE = gql`
    query movie($id: ID!){
    movie(id: $id){
    id
    title
    sinopsis
    genre
    category
    suscription_type
    rate
    poster
    video_url
    relased_date
    length
  }
}
`

class MovieDetail extends Component {
    constructor(props){
        super(props)

    }

    getVideo = (url) => {
        return url.split("=")[1]
    }

    
    render() { 

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
            }
          };

        return ( 
            <Query query={QUERY_MOVIE} variables={{id: this.props.match.params.id}} >
            {({loading,err,data}) => {
                if(loading) return 'Loading Your Movie...'
                if(err) return 'Error del servicio'
                return (
                    <div>
                        <h1>{data.movie.title}</h1>
                        <p>{data.movie.sinopsis}</p>
                        <YouTube videoId={this.getVideo(data.movie.video_url)}
                        opts={opts} 
                        />
                    </div>
                    )
            }}
        </Query>
         );
    }
}
 
export default MovieDetail;