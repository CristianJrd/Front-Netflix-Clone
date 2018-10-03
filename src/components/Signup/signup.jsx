import React, { Component } from 'react';
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'

const CREATE_USER = gql`
mutation signup($name: String! ,$email: String! ,$lastname: String! ,$password: String! ,$birth_date: String! ){
    signup(
      name: $name
      lastname: $lastname
      email: $email
      password: $password
      birth_date: $birth_date
    ){
      user{
        id
        email
      },
      token
    }
  }
`

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = { 
            name: '',
            email: '',
            lastname: '',
            password: '',
            birth_date: ''
         }
    }

    onInputChange = (e) => {
        let {id,value} = e.target
        this.setState({
            [id]: value
        })
    }

    onFormSubmit = (e,signup) => {
        e.preventDefault()
        console.log('pusheado')
        
        signup({
            variables:{
                name: this.state.name,
                email: this.state.email,
                lastname: this.state.lastname,
                password: this.state.password,
                birth_date: this.state.birth_date
            }
        }).then(response => {
            console.log(response)
            this.props.history.push('/login')
            
        }).catch(err => {
            console.log(err)
            alert("todo mal")
        })
    }
    
    render() { 
        return (
            <Mutation mutation={CREATE_USER}>
                {(signup,{data}) => (
                    <div>
                    <form onSubmit={(e) => this.onFormSubmit(e, signup)}>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" id="email" className="form-control" placeholder="Enter email"
                                onChange={this.onInputChange} value={this.state.email}
                            />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" id="name" className="form-control" placeholder="Enter name"
                                onChange={this.onInputChange} value={this.state.name}
                            />
                        </div>
                        <div className="form-group">
                            <label>LastName</label>
                            <input type="text" id="lastname" className="form-control" placeholder="Enter lastname"
                                onChange={this.onInputChange} value={this.state.lastname}
                            />
                        </div>
                        <div className="form-group">
                            <label>Birth Date</label>
                            <input type="text" id="birth_date" className="form-control" placeholder="Enter birth date"
                                onChange={this.onInputChange} value={this.state.birth_date}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" id="password" className="form-control" placeholder="Enter password"
                                onChange={this.onInputChange} value={this.state.password}
                            />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-success">Registrarme</button>
                        </div>
                    </form>
                </div>
                )}
            </Mutation>
         );
    }
}
 
export default Signup;