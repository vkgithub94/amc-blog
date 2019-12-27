import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import MostTop from './Components/mostTop';
import Top from './Components/Top';
import Overview from './Components/Overview';
import Team from './Components/Team';
import MobileApp from './Components/MobileApp';
import Footer from './Footer';
export default class App extends Component {
    render() {
        return (
            <div className="app-style">
               <Header /> 
               <MostTop />
               <Top />
               <Overview />
               <Team />
               <MobileApp />
               <Footer />
            </div>
        )
    }
}