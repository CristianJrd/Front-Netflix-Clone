import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import'./navbar.css'

class NavBar extends Component {
    constructor(props){
        super(props)
        this.state = { 
            
         }
    }

    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <Link to='/me'>
                        <h4 className="Navbar__name" >Hola {this.props.name}</h4>
                    </Link>
                </nav>
            </div>
         );
    }
}
 
export default NavBar;