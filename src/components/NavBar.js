import React from 'react';
import '../css/navbarStyle.css'
export class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show: true,
            scrollPos: 0
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    

    handleScroll(){
        const { scrollPos } = this.state;
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > scrollPos
        });
    }


    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
      
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
    render(){
        return(    
            <div className={this.state.show ? "top-menuActive": "top-menuHide"} id="header">
                <div className="container" onScroll={this.handleScroll}>
                    <nav className="menu">
                        <ul className="main-menu" role="navigation">
                            <li>
                                <a href="/#" className="underlinable">Work</a>
                            </li>
                            <li>
                                <a href="/#" className="underlinable">About</a>
                            </li>
                            <li>
                                <a href="/#" className="underlinable">News</a>
                            </li>
                            <li>
                                <a href="/#" className="underlinable">Careers</a>
                            </li>
                            <li>
                                <a href="www.google.com" title="Contact" className="contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default NavBar;