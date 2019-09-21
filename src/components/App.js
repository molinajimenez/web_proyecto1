import React, {Component} from 'react';
import NavBar from './NavBar.js';
import '../css/mainStyle.css'
class App extends Component{

    render(){
       return <div>
            <h1>React App</h1>
            <NavBar></NavBar>
        </div>
    }
}

export default App;