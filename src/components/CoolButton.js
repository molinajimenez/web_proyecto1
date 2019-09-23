import React, {Component} from 'react';
import '../css/Button.css'
import MdArrowRoundForward from 'react-ionicons/lib/MdArrowRoundForward'
class CoolButton extends Component{
    constructor(props){
        super(props);


        
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
            <a className={this.props.class} href="/#" data-splitting="words">{this.props.text}
                <MdArrowRoundForward style={imgStyle} fontSize='32px' color='white'></MdArrowRoundForward>
            </a>
        );
    }
}
export default CoolButton;