import React from 'react';
import {Container,Row,Col, Nav} from 'react-bootstrap';

function Footer(props) {
    return (
        <Container fluid className="footer mt-2">
            
            <Row className="justify-content-center">
                    <Col className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled mr-auto">
                        <li><Nav.Link href="home">Home</Nav.Link></li>
                        <li><Nav.Link href="projects">Our Projects</Nav.Link></li>
                        <li><Nav.Link href="aboutus">About</Nav.Link></li>
                        <li><Nav.Link href="contactus">Contact Us</Nav.Link></li>
                            
                        </ul>
                    </Col>
                    <Col className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            P.O.Box 7117<br />
		              Ajman<br />
		              UNITED ARAB EMIRATES.<br />
                            <i className="fa fa-phone fa-lg"></i>: +971-55 804 6299<br />
                            <i className="fa fa-fax fa-lg"></i>: +971-50 267 5822<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:aljazeerafiberuae@gmail.com">
                            aljazeerafiberuae@gmail.com</a>
                        </address>
                    </Col>
                    <Col className="col-12 col-sm-4 align-self-center">
                        <Row>
                        <Nav.Link className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></Nav.Link>
                        <Nav.Link className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></Nav.Link>
                        <Nav.Link className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></Nav.Link>
                        <Nav.Link className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></Nav.Link>
                        <Nav.Link className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></Nav.Link>
                        <Nav.Link className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></Nav.Link>
                        </Row>
                    </Col>
                </Row>
                <Row className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2018 Ristorante Con Fusion</p>
                    </div>
                </Row>
            </Container>
       
    )
}

export default Footer;