import React, {Component} from 'react';
import '../css/Client.css';

class Clients extends Component{
    render(){
        return(

            <section className="testimonial">
                <div className="container-video-Upper">
                    <div className="heading">
                        <h2 className="title">Hear from our clients</h2>
                        <h3 className="subtitle">The low down from those who know</h3>
                    </div>

                    <div className="fadeinUp">
                        <div className="imageContainer">
                            
                            <img src={require("../img/quote.svg")} className="quoteImg"></img>
                                
                        </div>

                        <div className="flexcol2">
                            <blockquote>
                                <p className="testimonialTxt">
                                "It was so easy working with Harry and the Haio team. They really seek to understand your specific objectives, listen to users and provide early challenge. They are brilliant and thoughtful collaborators."
                                </p>
                                <div className="testimonioPor">
                                    <div className="testimonioImagen">
                                        <img className="personaTestimonio" src={require("../img/steve-folwell-lovespace.jpg")}></img>
                                    </div>
                                    <p className="identity">Steve Folwell, CEO of LOVESPACE</p>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
export default Clients;