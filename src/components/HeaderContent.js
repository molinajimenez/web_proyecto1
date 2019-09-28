import React, {Component} from 'react';
import '../css/headerContent.css'
import CoolButton from './CoolButton.js';
class HeaderContent extends Component{
    render(){
       return (
        <div className="headerContent" >
            <p className="marquee">
                <span>
                    A digital design company
                </span>
            </p>
            <h1 className="mission-statement" >We design and build user-centred web apps, websites and brands for high growth companies.</h1>
            <div className="tableContainer">
                <div className="gridButtons">
                    <CoolButton class="animated" text="About us"></CoolButton>
                    <CoolButton class="animated" text="Our work"></CoolButton>
                </div>
            </div> 
            
        </div>
       )
    }
}

export default HeaderContent;