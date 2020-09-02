import React from 'react';
import { Container, Card,Row,Col,Breadcrumb} from 'react-bootstrap';

function AboutusBody(props){
    return(
        <Container className="mt-4">
            <Breadcrumb>
                <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>


                <Breadcrumb.Item active>About Us</Breadcrumb.Item>
            </Breadcrumb>
            <Row >
                
                <Col md="6">
                    <Card >
                        <Card.Img src="assets/images/brochure1.png"/>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <Card.Img src="assets/images/brochure2.png" />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default AboutusBody;