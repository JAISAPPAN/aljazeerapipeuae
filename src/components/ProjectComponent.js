import React from 'react';
import { Container,Row,Breadcrumb } from 'react-bootstrap';

function Project (props){
    return(
        <Container>

            <Breadcrumb>
                <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>


                <Breadcrumb.Item active>About Us</Breadcrumb.Item>
            </Breadcrumb>
            <Row>

                <h1>Mr. Leenachan, please give me information about the projects you have done so far.</h1>
            </Row>
        </Container>

        

    );
}

export default Project;