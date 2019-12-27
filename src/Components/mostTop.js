import React from 'react';
import './mostTop.css';
import Graph from '../imgs/graph.png';


export default function mostTop() {
    return (
        <div className="most-top-container">
            <div className="left-div">
                <p className="supercharge">Supercharge Your Wealth</p><br/>
                <p className="pms-text">Portfolio Management Service For Smart Investors</p>
            </div>

            <div className="right-div">
                <img className="graph-img" src={Graph} alt="graph" />
            </div>
        </div>
    )
}
