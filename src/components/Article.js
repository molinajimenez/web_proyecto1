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
                        <h2 className="mainTitle">{this.props.firstTag}</h2>
                        <h3 className="subtitle">{this.props.secondTag}</h3>
                    </div>
                    <ul className="items">
                        <li className="item1">
                            <a href="/#" title="LOVESPACE">
                                <div className="wrapper-item">
                                    <div className="work-item">
                                        <img className="image" src={require("../img/img1.png")} alt="cosa"></img>
                                    </div>

                                </div>
                            </a>
                            <div className="info">
                                <h3 className="mainTitle">{this.props.thirdTag}</h3>
                                <h4 className="subtitle">{this.props.fourthTag}</h4>
                            </div>

                            <div className="buttonHolder">
                                
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
export default Article;