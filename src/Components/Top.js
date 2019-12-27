import React from 'react';
import './Top.css';
import Glob from '../imgs/direct.png';

export default function Top() {
    return (
        <div className="top-container">
            <div className="left-div1">
                <img className="gob-img" src={Glob} alt="img" />
            </div>

            <div className="right-div1">
                <p className="we-were-the-first">WE WERE THE FIRST</p><br/>
                <p className="dmf-plateform">Direct Mutual Fund Platform</p><br/>
                <p className="blog">Now, we have brought to you the best in class portfolio management service with data driven approach. 
                We analyse over 10 million data points to provide you the best risk adjusted returns.</p>
            </div>
        </div>
    )
}
