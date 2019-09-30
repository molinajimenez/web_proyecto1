import React, {Component} from 'react';
import '../css/Footer.css';

class Footer extends Component{

    render(){
        return(
            <footer>
                <div className="container-video-Upper">
                    <hr></hr>
                    <div className="endContainer">
                        <div className="column1">
                            <a href="/#" title="Haio">
                                <img src={require("../img/vectorpaint.svg")} className="logoHaio"></img>
                            </a>
                        </div>

                        <div className="column2">
                            <nav className="footer-menu">
                                <ul>
                                    <li>
                                        <a href="/#" title="Work">Work</a>
                                    </li>
                                    <li>
                                        <a href="/#" title="About">About</a>
                                    </li>
                                    <li>
                                        <a href="/#" title="News">News</a>
                                    </li>
                                    <li>
                                        <a href="/#" title="Careers">Careers</a>
                                    </li>
                                    <li>
                                        <a href="/#" title="Contact">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="column3">
                            <nav className="footer-menu">
                                <ul>
                                    <li>
                                        <a href="/#" title="Privacy policy" className="gray">Privacy policy</a>
                                    </li>
                                    <li>
                                        <a href="/#" title="Terms & conditions" className="gray">Terms & conditions</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="column4">
                            <ul className="social-links">
                                <li>
                                    <a href="https://www.facebook.com/haio.design/" title="Follow Haio on Facebook">
                                        <img src={require("../img/facebook.png")}></img>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/haiodesign/" title="Connect with Haio on LinkedIn">
                                        <img src={require("../img/linked.png")}></img>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/haiodesign" title="Tweet Haio!">
                                        <img src={require("../img/twitter.png")}></img>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/haio.design/" title="Insta Haio!">
                                        <img src={require("../img/insta.png")}></img>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://dribbble.com/haiodesign" title="Haio on Dribbble">
                                        <img src={require("../img/dribbble.png")}></img>
                                    </a>
                                </li>
                                
                                
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

}
export default Footer;