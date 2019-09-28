import React, {Component} from 'react';
import '../css/Article.css';
import CoolButton from './CoolButton';
class Article extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section>
                <div className="container-video-Upper">
                    <div className="headerArt1">
                        <h2 className="mainTitle">{this.props.titles[0]}</h2>
                        <h3 className="subtitle">{this.props.subtitles[0]}</h3>
                    </div>
                    <ul className="items">
                        <li className="item1">
                            <a href="/#" title="LOVESPACE">
                                <div className="wrapper-item">
                                    <div className="work-item" style={{backgroundColor: this.props.colors[0]}}>
                                        <img className="image" src={require("../img/img1.png")} alt="cosa"></img>
                                    </div>

                                </div>
                            </a>

                            <div className="inGrid">
                                <div className="info">
                                    <h3 className="mainTitle">{this.props.titles[1]}</h3>
                                    <h4 className="subtitle">{this.props.subtitles[1]}</h4>
                                </div>

                                <div className="buttonHolder">
                                    <CoolButton class="animated" text='Read more'></CoolButton>
                                </div>    
                            </div>
                        </li>

                        <li className="item1">

                            <a href="/#" title="LOVESPACE">
                                <div className="wrapper-item">
                                    <div className="work-item" style={{backgroundColor: this.props.colors[1]}}>
                                        <img className="image" src={require("../img/img2.png")} alt="cosa"></img>
                                    </div>

                                </div>
                            </a>

                            <div className="inGrid">
                                <div className="info">
                                    <h3 className="mainTitle">{this.props.titles[2]}</h3>
                                    <h4 className="subtitle">{this.props.subtitles[2]}</h4>
                                </div>

                                <div className="buttonHolder">
                                    <CoolButton class="animated" text='Read more'></CoolButton>
                                </div>    
                            </div>

                        </li>
                         <li className="item1">

                            <a href="/#" title="LOVESPACE">
                                <div className="wrapper-item">
                                    <div className="work-item" style={{backgroundColor: this.props.colors[2]}}>
                                        <img className="image" src={require("../img/img3.png")} alt="cosa"></img>
                                    </div>

                                </div>
                            </a>

                            <div className="inGrid">
                                <div className="info">
                                    <h3 className="mainTitle">{this.props.titles[3]}</h3>
                                    <h4 className="subtitle">{this.props.subtitles[2]}</h4>
                                </div>

                                <div className="buttonHolder">
                                    <CoolButton class="animated" text='Read more'></CoolButton>
                                </div>    
                            </div>

                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
export default Article;