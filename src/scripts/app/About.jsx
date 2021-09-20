import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Header from './section/Header';
import Welcome from './section/Welcome';


export default class About extends Component {


    render(){
        return (
            <Row type="flex" justify="center">
                <Col span={18}>
                    <Header selectedMenu="morepage:about" />
                    <Welcome title="Welcome To About Page"/>
                </Col>
            </Row>
        )
    }
}

