import React, { Component } from 'react';
import './Header.css';
import logo from '../src/imgs/logo.png';
import Disclosure from '../src/imgs/Disclosure_Document_26Dec19.pdf'



export default class Header extends Component {
    render() {
        return (
            <div className="header">
                    <a href="https://www.orowealth.com/" ><img className="logo" src={logo} alt="Logo"/></a>
                <div className="right-content">
                    <a href={Disclosure} rel="noopener noreferrer" target="_blank"><button type="button" className="btn-default">Disclosure</button></a>
                    <a href="https://www.orowealth.com/signup/" ><button type="button" className="btn-default">Sign Up</button></a>
                    <a href="https://www.orowealth.com/login/" ><button type="button" className="btn-default">Login</button></a>
                </div>
            </div>  
        )
    }
}