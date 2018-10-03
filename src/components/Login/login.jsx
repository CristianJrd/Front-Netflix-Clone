import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo'

const MUTATION_LOGIN = gql`
mutation login ($email: String!, $password: String!){
  login(
    email: $email
    password: $password
  ){
    token
    user{
      name
    }
  }
}
`

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "", 
            password: ""
         }
    }

    onInputChange = (e) => {
        let {id, value} = e.target
        this.setState({
            [id]:value
        })
    }

    onFormSubmit = (e, login) => {
        e.preventDefault()
        console.log("submit")
        
        login({
            variables:{
                email: this.state.email,
                password: this.state.password
            }
        }).then(response => {
            //save token
            localStorage.setItem('token', response.data.login.token)
            this.props.history.push('/')
        }).catch(err => {
            console.log(err)
            console.log("invalid password or user..")
        })
    }
    
    render() { 
        return ( 
            <Mutation mutation={MUTATION_LOGIN}>
                {(login, {data}) => (
                    <form onSubmit={(e) => this.onFormSubmit(e, login)}>
                        <div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" id="email" className="form-control" placeholder="Enter email"
                                    onChange={this.onInputChange} value={this.state.email}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" id="password" className="form-control" placeholder="Enter password"
                                    onChange={this.onInputChange} value={this.state.password}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success">Login</button>
                    </form>
                )}
            </Mutation>
         );
    }
}
 
export default Login;