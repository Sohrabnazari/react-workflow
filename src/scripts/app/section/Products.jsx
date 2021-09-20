import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import helper from './../../helper';
import Product from './Product';


class Products extends Component {
    

    constructor(props){
        super(props);

        this.renderRow = this.renderRow.bind(this);
        this.renderProduct = this.renderProduct.bind(this);

        this.chunkProduct = helper.array_chunk(Object.keys(this.props.products), 3);
    }
    
    
    UNSAFE_componentWillReceiveProps(newProps){
        // if using ajax in App you need do this
       // this.chunkProduct = helper.array_chunk(Object.keys(newProps.products), 3);
    }


    renderProduct(key){
        return(
            <Col key={key} span={8}>
                <Product index={key} product={this.props.products[key]} orders={this.props.orders} addToCard={this.props.addToCard} />
            </Col>
        )
    }

    renderRow(key){
        return(
            <Row key={key}>
                { this.chunkProduct[key].map(this.renderProduct) }
            </Row>
        )
    }


    render(){
        return(
            <Row>
                <Col span={24}>
                    <Row className="row-product">
                        { Object.keys(this.chunkProduct).map(this.renderRow) }
                    </Row>
                </Col> 
            </Row>
        )
    }

}


Products.propTypes = {

    addToCard:  PropTypes.func.isRequired,
    products: PropTypes.object.isRequired,
    orders: PropTypes.array.isRequired
};


export default Products;