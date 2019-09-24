import React, {Component} from 'react';
import '../css/Button.css'
import MdArrowRoundForward from 'react-ionicons/lib/MdArrowRoundForward'
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
        var imgStyle ={
            position: "relative",
            left: "25%",
            top: "90%",
            backgroundColor: "#2480FF",
            borderRadius: "50%",
        }
        return(
            <a className={this.props.class} href="/#" data-splitting="words">{this.props.text}</a>
        );
    }
}
export default CoolButton;