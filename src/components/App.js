import React, {Component} from 'react';
import NavBar from './NavBar.js';
import HeaderContent from './HeaderContent';
import '../css/mainStyle.css'
class App extends Component{

    render(){
       return <div>
            <NavBar></NavBar>
            <HeaderContent></HeaderContent>
        </div>
    }
}

export default App;