import React from 'react';
import './Overview.css';
import DD from '../imgs/data.png';
import CF from '../imgs/client.png';
import Exp from '../imgs/expert.png';

export default function Overview() {
    return (
        <div className="overview-container">
            <div className="left-div2">
                <img className="data-driven" src={DD} alt="DD" />
                <p className="data-driven-text">Data Driven</p><br/>
                <p className="data-driven-blog">We believe in data driven approach. 
                Extensive analysis to uncover the best stocks for your portfolio</p>
            </div>

            <div className="middle-div">
                <img className="client-first" src={CF} alt="DD" />
                <p className="client-first-text">Client First</p><br/>
                <p className="client-first-blog">We follow a transparent approach. 
                We earn fees only if you make money, completely aligning interest with you.</p>
            </div>

            <div className="right-div2">
                <img className="expertise" src={Exp} alt="DD" />
                <p className="expertise-text">Expertise</p><br/>
                <p className="expertise-blog">Smart people working together can achieve the impossible. 
                Your money will be managed by the best of the best.</p>
            </div>
        </div>
    )
}
