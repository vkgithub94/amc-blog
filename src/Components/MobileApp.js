import React from 'react';
import './MobileApp.css';
import PStore from '../imgs/google-play-brands.svg';
import AStore from '../imgs/apple-brands.svg';
import Mobile from '../imgs/Mobile-162x300.png';
export default function MobileApp() {
    return (
        <div className="mobile-app">
            <div className="store">
                <p className="bobile-app-text">MOBILE APP</p><br/>
                <p className="track-f-any">Track From Anywhere</p>
                <a href="https://play.google.com/store/apps/details?id=com.orowealth.orowealthv11">
                <button className="button1" type="submit">
                <img src={PStore} alt="test" 
                    style={{height:'36px',
                    width:'50px',
                    marginLeft:'-40px'
                    }}/>Play Store</button></a>

                <a href="https://apps.apple.com/us/app/orowealth-direct-mutual-funds/id1435455422">
                <button className="button2" type="submit">
                <img src={AStore} alt="test" 
                style={{height:'36px',
                    width:'50px',
                    marginLeft:'-50px'
                }}/>App Store</button></a>
            </div>

            <div className="mobile">
                <img className="mobile-img" src={Mobile} alt="mobile-img" />
            </div>
        </div>
    )
}
