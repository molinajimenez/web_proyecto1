import React from 'react';
import '../css/VideoFrame.css';

export class VideoFrame extends React.Component{
    render(){

        return(
            <section className='firstArt'>
                <div className="container-video-Upper">
                    <div className="videoContainer">
                        <iframe src="https://player.vimeo.com/video/355557740" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen=""></iframe>
                    </div>

                </div>
            
            </section>
        );
        
        
    }
}

export default VideoFrame;