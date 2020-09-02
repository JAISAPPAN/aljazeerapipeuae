import React from 'react';
import { Nav,NavLink,Button,Container,Row,Col,Breadcrumb} from 'react-bootstrap';

function Contact(props) {
    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>


                <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col md={6}>
                    <h3>Location Information</h3>
                </Col>
                <Col md={7}>
                    <h5>Our Address</h5>
                    <address>
                        P.O.Box 7117<br />
                        Ajman<br />
                        UNITED ARAB EMIRATES.<br />
                        <i className="fa fa-phone"></i>: +971-55 8046299<br/>
                        <i className="fa fa-fax"></i>: +971-333 7725<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                </Col>
                <Col>
                    <h5>Map of our Location</h5>
                </Col>
                <Col md={6}>
                    <div className="btn-group" role="group">
                        <Nav.Link role="button" className="btn btn-primary" href="tel:+971-55 8046299"><i className="fa fa-phone"></i> Call</Nav.Link>
                        <Nav.Link role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</Nav.Link>
                        <Nav.Link role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</Nav.Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;