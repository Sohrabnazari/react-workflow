import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Axios from 'axios';

import Header from './section/Header';
import Welcome from './section/Welcome';


export default class SingleProduct extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            product: {}
        }
    }


    UNSAFE_componentWillMount(){
        
        Axios.get('http://shop.local/api/product/get/' + this.props.params.slug )
        .then((response) => {
            console.log(response.data);

            // if using ajax to get data, you need to setState new data and show them on render as this.state.product

            // this.setState({
            //     product: response.data
            // });

        })
        .catch((error) => {
            console.log(error);
        });
    }


    render(){
        return (
            <Row type="flex" justify="center">
                <Col span={18}>
                    <Header selectedMenu="" />

                    <Row>
                        <Col style={{ textAlign: 'center' }}> 
                        
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

