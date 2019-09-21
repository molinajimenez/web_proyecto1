import React from 'react';
import '../css/navbarStyle.css'
export class NavBar extends React.Component{
    render(){
        return(
            <header className="so-ele home">
                <div className="top-menu" id="header">
                    <div className="container">
                        <nav className="menu">
                            <ul className="main-menu" role="navigation">
                                <li>
                                    <a href="/#">Work</a>
                                </li>
                                <li>
                                    <a href="/#">About</a>
                                </li>
                                <li>
                                    <a href="/#">News</a>
                                </li>
                                <li>
                                    <a href="/#">Careers</a>
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