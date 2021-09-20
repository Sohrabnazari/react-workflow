import React, { Component } from 'react';
import { Row, Col, Menu, Button, Dropdown } from 'antd';
// import Cookie from 'react-cookie';
import Cookies from 'js-cookie';

class ButtonCard extends Component {

    constructor(props){
        super(props);

        this.renderMenu = this.renderMenu.bind(this);
    }

    
    handleMenuClick(event){
        console.log('event.key');
    }


    renderMenu(key){

        if(Object.keys(this.props.products).length != 0){
            return (
                <Menu.Item key={key}>
                    { this.props.products[this.props.orders[key]].title }
                </Menu.Item>
            )
        }
        
    }


    render(){

        let menu = (
            <Menu onClick={(key) => this.props.removeFromCard(key)}>
                { Object.keys(this.props.orders).map(this.renderMenu) }
            </Menu>
        );
    
        return(
            <div className="cart-button">
                <Dropdown overlay={menu} >
                    <Button type="primary" style={{ marginLeft: '8px', padding: '1rem 2.5rem', lineHeight: '0.25rem' }}>
                        Shopping Card
                    </Button>
                </Dropdown>
            </div>
        );
    }

}


export default ButtonCard;