import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import {registerUrl } from './res/urls';

export const Register = (props) => {

    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        phone: 0
    });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({
            ...state,
            [name]: value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(registerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(state),
            mode: 'cors'
        }).then((response) => {
            if (response.status === "409") {

                alert("Trainee with this E-mail already exists")

            }
        }).catch((error) => { console.log(error); })
    }
    return (
        <div className="App">
            <Form onSubmit={(e) => { handleSubmit(e); }}>
                <Form.Row> <h2>Trainee Registeration Form</h2> </Form.Row>

                <Form.Row>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control type='name' name="name" onChange={(e) => { handleChange(e); }} />
                </Form.Row>
                <Form.Row>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control type='email' name="email" required={true} onChange={(e) => { handleChange(e); }} />
                </Form.Row>
                <Form.Row>
                    <Form.Label htmlFor="phone">Phone</Form.Label>
                    <Form.Control type='phone' name="phone" onChange={(e) => { handleChange(e); }} />
                </Form.Row>
                <Form.Row>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control type='password' name="password" required={true} onChange={(e) => { handleChange(e); }} />
                </Form.Row>
                <Form.Row>
                    <Button variant="primary" type="submit">
                        Submit
        </Button>
                </Form.Row>

            </Form>
        </div>
    );
}