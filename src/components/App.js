import React, {Component} from 'react';
import NavBar from './NavBar.js';
import HeaderContent from './HeaderContent';
import VideoFrame from './VideoFrame';
import '../css/mainStyle.css'
class App extends Component{

    render(){
       return(
        <header className="mainHeader">
            <div className="outerContainer">
                
                <NavBar></NavBar>
                <HeaderContent></HeaderContent>
            </div>
            <VideoFrame></VideoFrame>
        </header>
        
        

       );
    }
}

export default App;