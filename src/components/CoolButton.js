import React, {Component} from 'react';
import '../css/Button.css'
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
class CoolButton extends Component{
    constructor(props){
        super(props);


        
    }

    componentDidMount(){
        Splitting();
    }

    render(){
        
        return(
            <div className="buttonContainer">
                <a className={this.props.class} href="/#" data-splitting="words">{this.props.text}</a>
            </div>
            
        );
    }
}
export default CoolButton;