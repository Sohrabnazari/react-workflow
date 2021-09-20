import React, { Component } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';

import Header from './section/Header';
import Welcome from './section/Welcome';


export default class Contact extends Component {
    

    constructor(props){
        super(props);

        this.state = {
            contactForm: {
                name: '',
                email: '',
                message: ''
            }
        } 

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange( event ){
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        
        this.state.contactForm[name] = value;
        this.setState({
            contactForm: this.state.contactForm
        });

    }
    
    
    handleSubmit( event ){
        event.preventDefault();
        console.log(this.state.contactForm);
    }


    render(){
        return (
            <Row type="flex" justify="center">
                <Col span={18}>
                    <Header selectedMenu="morepage:contact" />
                    <Welcome title="Welcome To Contact Page"/>

                    <Row type="flex" justify="center">
                        <Col span={18}>
                            <h2>Contact Form</h2>

                            <Form onSubmit={ this.handleSubmit }>
                                <Form.Item label="Name">
                                    <Input 
                                        type="text" 
                                        name="name"
                                        placeholder="Please enter your name"
                                        value={this.state.contactForm.name}
                                        onChange={this.handleChange}
                                        />
                                </Form.Item>
               
                                <Form.Item label="Email">
                                    <Input 
                                        type="text" 
                                        name="email"
                                        placeholder="Please enter your email"
                                        value={this.state.contactForm.email}
                                        onChange={this.handleChange}
                                        />
                                </Form.Item>
                  
                                <Form.Item label="Message">
                                    <Input.TextArea
                                        name="message"
                                        placeholder="Please enter your message"
                                        value={this.state.contactForm.message}
                                        onChange={ this.handleChange }
                                        ></Input.TextArea>
                                </Form.Item>
                     
                                <Form.Item label="email">
                                    <Button type="primary" htmlType="submit">Send</Button>
                                </Form.Item>

                            </Form>

                        </Col>
                    </Row>

                </Col>
            </Row>
        )
    }
}
