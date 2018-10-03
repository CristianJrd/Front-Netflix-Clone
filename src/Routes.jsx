import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Redirect} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';
import client from './graphql'
import Login from './components/Login/login'
import Signup from './components/Signup/signup';
import Home from './components/Home/home'
import isAuthenticated from './resolvers/isAuthenticated'
import MovieDetail from './components/Home/MovieDetail/movieDetail'
import Me from './components/Me/me'

class Routes extends Component {
    state = {  }
    render() {

        const PrivateRoute = ({component:Component, ...rest}) => (
            <Route {...rest} render={(props) => (
                isAuthenticated() === true
                ? <Component {...props} />
                : <Redirect to="/login" />
            )} />
        )

        return ( 
            <Router>
                <ApolloProvider client={client}>
                <main>
                    <PrivateRoute exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <PrivateRoute exact path='/movie/:id' component={MovieDetail}/>
                    <PrivateRoute exact path='/me' component={Me} />
                </main>
                </ApolloProvider>
            </Router>
         );
    }
}
 
export default Routes;