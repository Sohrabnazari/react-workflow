import React, { Component } from 'react';
import { Row, Col } from 'antd';


export default class Welcome extends Component {
    
    render(){
        return(
            <Row>
                <Col>
                    <h1 className="header_title">{ this.props.title }</h1>
                    <p className="header_description">
                        Cillum non anim id anim nostrud nulla aliqua. Ex culpa ad qui fugiat laborum sint nisi aute ut cupidatat. Amet quis adipisicing nisi dolor culpa magna amet dolor et aliquip amet mollit. Magna ea deserunt ut cillum reprehenderit reprehenderit mollit ipsum aute dolore irure elit id. Quis Lorem enim anim ad eu id veniam laborum ad anim nulla reprehenderit in nostrud. Velit exercitation labore reprehenderit anim commodo magna nisi reprehenderit occaecat exercitation est magna dolore.

                    </p>
                </Col> 
            </Row>
        )
    }

}
