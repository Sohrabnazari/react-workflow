import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, HashRouter } from 'react-router-dom';

import App from './app/App';
import About from './app/About';
import Contact from './app/Contact';
import SingleProduct from './app/SingleProduct';


import '../styles/app.scss'


const routes = (

    <HashRouter>
        <Route path="/" component={App}/>
        <Route path="/product/:slug" component={SingleProduct}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
    </HashRouter>
);




ReactDOM.render(routes, document.getElementById("root"));
