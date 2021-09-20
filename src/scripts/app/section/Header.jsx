import React, { Component } from 'react';
import { Row, Col, Menu } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



export default class Header extends Component {
    
    constructor(props){

        super(props);

        this.state = {
            current: this.props.selectedMenu
        }

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick( event ){
        event.preventDefault;
        this.setState({
            current: event.key
        });
    }


    render(){
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">

                <Menu.Item key="home">
                    <Link to="/">Home</Link>
                </Menu.Item>

                <Menu.Item key="app">
                    Products
                </Menu.Item>

                <Menu.Item key="sohrabnazari">
                    <a href="https://sohrabnazari.ir" target="_blank" rel="noopener noreferrer">Sohrab Nazari</a>
                </Menu.Item>

                <SubMenu title={<span>More Page</span>}>

                    <MenuItemGroup title="Pages">
                        <Menu.Item key="morepage:about"><Link to="/about">About Us</Link></Menu.Item>
                        <Menu.Item key="morepage:contact"><Link to="/contact">Contact Us</Link></Menu.Item>
                    </MenuItemGroup>

                </SubMenu>

            </Menu>
        )
    }
}

