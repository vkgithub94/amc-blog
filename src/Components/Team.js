import React from 'react';
import './Team.css';
import Nitin from '../imgs/nitin.png';
import Vijay from '../imgs/vijay.png';
import Yogesh from '../imgs/yogesh.png';
import Vaibhav from '../imgs/vaibhav.png';
import LinkedIn from '../imgs/linkedin-brands.svg';

export default function Team() {
    return (
        <div className="our-team-container">
            <p className="our-team-text1">Our Team</p>

            <div className="our-team">

                <div className="nitin">
                    <img className="nitin-img" src={Nitin} alt="img1" />
                    <p className="nitin-text">Nitin Agrawal</p><br/>
                    <p className="nitin-dg">Co-Founder</p>
                    <a href="https://www.linkedin.com/in/nitinagrawaliimbangalore/" rel="noopener noreferrer" target="_blank">
                    <img className="linkedIn" src={LinkedIn} alt="linkedIn" />
                    </a>
                </div>

                <div className="vijay">
                    <img className="vijay-img" src={Vijay} alt="img2" />
                    <p className="vijay-text">Vijay Kuppa</p><br/>
                    <p className="vijay-dg">Co-Founder</p>
                    <a href="https://www.linkedin.com/in/vijay-kuppa-64622912/" rel="noopener noreferrer" target="_blank">
                    <img className="linkedIn" src={LinkedIn} alt="linkedIn" />
                    </a>
                </div>

                <div className="yogesh">
                    <img className="yogesh-img" src={Yogesh} alt="img3" />
                    <p className="yogesh-text">Yogesh Powar</p><br/>
                    <p className="yogesh-dg">Co-Founder</p>
                    <a href="https://www.linkedin.com/in/yogeshapowar/" rel="noopener noreferrer" target="_blank">
                    <img className="linkedIn" src={LinkedIn} alt="linkedIn" />
                    </a>
                </div>
                
                <div className="vaibhav">
                    <img className="vaibhav-img" src={Vaibhav} alt="img4" />
                    <p className="vaibhav-text">Vaibhav Shah</p><br/>
                    <p className="vaibhav-dg">Head Research</p>
                    <a href="https://www.linkedin.com/in/vaibhav-shah-58281b92/" rel="noopener noreferrer" target="_blank">
                    <img className="linkedIn" src={LinkedIn} alt="linkedIn" />
                    </a>
                </div>
            </div>
        </div>
    )
}
