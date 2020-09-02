import React,{Component} from 'react';
import {Nav,Navbar,Form,FormControl,Button,Jumbotron, Container,Row,Col,Card} from 'react-bootstrap';


class Header extends Component{
    render(){
    return(
        <>
            <Container fluid className="header">
                
                
            <Navbar bg="primary">
                <Navbar.Brand href="/home"><h1>LOGO</h1></Navbar.Brand>
                <Nav>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/projects"> Our Projects</Nav.Link>
                    <Nav.Link href="/aboutus">About Us</Nav.Link>
                    <Nav.Link href="/contactus">Contact Us</Nav.Link>
                </Nav>
                         
            </Navbar>
               
                
           
                <Jumbotron className="mt-1">
                    <Container>
                        <Row>
                            <Col sm="6">
                                <h4>AL JAZEERA Pipeline Construction Cont.LLC.</h4><br/>
                                <h2>ISO 9001:2015 CERTIFIED COMPANY.</h2>
                                <p>We take inspiration from the World's best Engineering companies. Our staff is very well trained and is capable of doing any tasks in the related field.!</p>
                            </Col>
                            <Col>
                            <Card>
                                                          
                                <Card.Img width="250" height="250"
                                src="assets/images/businesscard.png" />   
                            </Card>
                            </Col>
                            
                        </Row>
                    </Container>
                </Jumbotron>
               
        </Container>

            
        </>
    );
    }
}

export default Header;