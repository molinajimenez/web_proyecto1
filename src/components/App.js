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
                <Article firstTag="Selected projects" secondTag="Good fun, great work" thirdTag="LOVESPACE" fourthTag="Improving the UX for 50,000 customers a year"></Article>
            </div>
       );
    }
}

export default App;