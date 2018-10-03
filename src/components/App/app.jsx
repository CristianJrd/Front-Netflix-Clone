import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React, { Component } from 'react'
import Routes from '../../Routes'


class App extends Component {
    
    render() { 
        return ( 
            <div className="cover">
                <Routes />
            </div>
         );
    }
}
 
export default App;