import React, {Component} from 'react';
import NavBar from './NavBar.js';
import HeaderContent from './HeaderContent';
import '../css/mainStyle.css'
class App extends Component{

    render(){
       return(
        <header className="mainHeader">
            <div className="outerContainer">
                <NavBar></NavBar>
                <HeaderContent></HeaderContent>
            </div>
            
        </header>

       );
    }
}

export default App;