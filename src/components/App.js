import React, {Component} from 'react';
import Header from './Header';
import VideoFrame from './VideoFrame';
import Article from './Article';

class App extends Component{

    render(){
       return(
            <div>
                <Header></Header>
                <VideoFrame></VideoFrame>
                <Article titles={["Selected projects","LOVESPACE", "Payaca", "Bunk"]} subtitles={["Good fun, great work", 
                "Improving the UX for 50,000 customers a year", 
                "Leveling the playing field with a new brand, website and app",
                "Putting renting in motion"]} colors={["#4CBBB6", "#FFE18B","#46C4F3"]}></Article>
            </div>
       );
    }
}

export default App;