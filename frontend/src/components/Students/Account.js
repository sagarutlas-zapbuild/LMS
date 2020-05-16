import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Account = () => {
    return (
        <Container >
            <Row className="justify-content-md-center">
                <h2>{localStorage.getItem('email')}</h2>
            </Row>
            <Row className="justify-content-md-center">
                <Button variant='danger' onClick={() => localStorage.clear()}>Logout</Button>
            </Row>
            <hr/>
            <Row>
                <h4>Notifications</h4>
            </Row>

                No Notifications

            <hr/>

            <Row>
                <h4>Profile</h4>
            </Row>

            <hr/>

            <Row>
                <h4>Files</h4>
            </Row>

            <hr/>

            <Row>
                <h4>e-Portfolio</h4>
            </Row>

            <hr/>

        </Container>)
}

export default Account