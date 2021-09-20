import React, { Component } from 'react';
import { Row, Col } from 'antd';
// import Cookie from 'react-cookie';
import Cookies from 'js-cookie';
import Axios from 'axios';

import Header from './section/Header';
import Welcome from './section/Welcome';
import Products from './section/Products';
import ButtonCard from './section/ButtonCard';

import Data from './data';


export default class App extends Component {


    constructor(props){
        super(props);

        this.state = {
            products: Data,
            orders: ( typeof(Cookies.get('orders')) == "undefined" ? [] : Cookies.get('orders') )
        }
        
        this.addToCard = this.addToCard.bind(this);
        this.removeFromCard = this.removeFromCard.bind(this);
    }


    UNSAFE_componentWillMount(){

        Axios.get('https://jsonplaceholder.typicode.com/photos/' + (Math.floor(Math.random() * 5000) + 1) )
        .then((response) => {
            console.log(response.data);

            // if using ajax to get data, you need to setState new data and change value of constructor -> state.products to {}
            // also you need change value of Products -> constructor -> chunkproduct to [] and use componentWillReceiveProps

            // this.setState({
            //     products: response.data
            // });

        })
        .catch((error) => {
            console.log(error);
        });
    }


    addToCard( key ){
        if(this.state.products[key].available && this.state.orders.indexOf(key) == -1){
            this.state.orders.push(key);
            Cookies.set('orders', this.state.orders, { path: '/' });
            this.setState({
                orders: this.state.orders
            });
            console.log(`${key} added to your orders!`);
            console.log( this.state.orders);
        } else {
            console.log(`You can't add ${key} to your orders!`);
        }
    }
 
    
    removeFromCard( order ){
        let productKey = this.state.orders[order.key];
        let index = this.state.orders.indexOf(productKey);

        console.log(order);
        console.log(productKey);
        console.log(index);

        if(index != -1){
            this.state.orders.splice(index, 1);
            Cookies.set('orders', this.state.orders, { path: '/' });
            this.setState({
                orders: this.state.orders
            });
            console.log(`${key} removed from your orders!`);
        }
    }
 
    
    handleClick( event ){
        event.preventDefault();
    }

    render(){
        return (
            <Row type="flex" justify="center">

                <Col span={18}>
                    <Header selectedMenu="home" />
                    <Welcome title="Welcome To My Shop"/>
                    
                        
                     <Products products={this.state.products} orders={this.state.orders} addToCard={this.addToCard} /> 

                  
                </Col>

                <ButtonCard products={this.state.products} orders={this.state.orders} removeFromCard={this.removeFromCard} />

            </Row>

            
        )
    }
}

