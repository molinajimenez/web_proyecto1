import React from 'react';
import '../css/navbarStyle.css'
export class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            direction: '',
            lastScroll:0
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    

    handleScroll(event){
        if(this.state.lastScroll > event.currentTarget.scrollTop){
            this.setState({
                direction: 'top',
                lastScroll: event.currentTarget.scrollTop
            });
        } else if(this.state.lastScroll < event.currentTarget.scrollTop){
            this.setState({
                direction: 'down',
                lastScroll: event.currentTarget.scrollTop
            });
        }

        this.checkStatus(this.state.direction)
    }

    checkStatus(currentPos){
        if (currentPos == 'top'){
            console.log("nothing to do.")
        } else{
            console.log('add shadow')
        }
    }
    
    render(){
        return(
            <header className="so-ele home">
                <div className="top-menu" id="header">
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

            </header>
            
        );
    }
}

export default NavBar;