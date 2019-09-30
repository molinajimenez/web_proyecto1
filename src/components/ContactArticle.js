import React, {Component} from 'react';
import '../css/ContactArticle.css';
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
                    <ul className="contact-list">
                        <li> 
                            <a href="/#" title="Message us">
                                <div className="contact-icon">
                                    <img src={require("../img/message.svg")}></img>
                                </div>
                                <h5>Message us</h5>
                            </a>
                        </li>
                        <li> 
                            <a href="/#" title="hello@haio.design">
                                <div className="contact-icon">
                                    <img src={require("../img/mail.svg")}></img>
                                </div>
                                <h5>hello@haio.design</h5>
                            </a>
                        </li>
                        <li> 
                            <a href="http://maps.google.com/?q=35%20King%20Street,%20Bristol" title="35 King St, Bristol">
                                <div className="contact-icon">
                                    <img src={require("../img/location.svg")}></img>
                                </div>
                                <h5>35 King St, Bristol</h5>
                            </a>
                        </li>
                        <li> 
                            <a href="/#" title="0117 251 0056">
                                <div className="contact-icon">
                                    <img src={require("../img/svg6.svg")}></img>
                                </div>
                                <h5>0117 251 0056</h5>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
export default Article;