import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Tag } from 'antd';

import helper from './../../helper';


class Product extends Component {

    constructor(props){
        super(props);
    }
    

    render(){

        let disableStyle = this.props.product.available && (this.props.orders.indexOf(this.props.index) == -1) ? '' : { cursor: 'not-allowed', backgroundColor: '#999' };
    
        return(
            <Card className="custom-card" bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                    <Link to={"/product/" + this.props.product.slug}>
                        <img alt="example" width="100%" src={ this.props.product.image  } />
                    </Link>
                </div>

                <div className="custom-card-desc">
                    <h3><Link to={"/product/" + this.props.product.slug}>{this.props.product.title}</Link></h3>
                    <p> {this.props.product.description} </p>
                </div>

                <div style={{ padding: '0 16px 10px' }} >
                    <Tag color="#123678"> ${this.props.product.price} </Tag>
                    <Tag style={ disableStyle } color="#108eee" onClick={ () => this.props.addToCard(this.props.index) } > Add To Cart </Tag>
                </div>

            </Card>
        )
    }

}


Product.propTypes = {
    
        addToCard:  PropTypes.func.isRequired,
        product: PropTypes.object.isRequired,
        orders: PropTypes.array.isRequired
};


export default Product;