import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import { registerUrl } from './res/urls';

export const Register = (props) => {

    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        phone: 0,
        is_type: "Student",
        referral_code: ""
    });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({
            ...state,
            [name]: value,
        });
        console.log(state);
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
        <Form onSubmit={(e) => { handleSubmit(e); }}>
            <Form.Row> <h2>Sign Up</h2> </Form.Row>
            <Form.Row>
                <Form.Label >Referral Code</Form.Label>
                <Form.Control type='name' name="referral_code" onChange={(e) => { handleChange(e); }} />
            </Form.Row>
            <Form.Row>
                <Form.Label >Name</Form.Label>
                <Form.Control type='name' name="name" onChange={(e) => { handleChange(e); }} />
            </Form.Row>
            <Form.Row>
                <Form.Label >Email</Form.Label>
                <Form.Control type='email' name="email" required={true} onChange={(e) => { handleChange(e); }} />
            </Form.Row>
            <Form.Row>
                <Form.Label >Phone</Form.Label>
                <Form.Control type='number' name="phone" onChange={(e) => { handleChange(e); }} />
            </Form.Row>
            <Form.Row>
                <Form.Label >I am a</Form.Label>
                <Form.Control as="select" name="is_type" value = {state.is_type} onChange={(e) => { handleChange(e); }}>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Parent">Parent</option>
                </Form.Control>
            </Form.Row>
            <Form.Row>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name="password" required={true} onChange={(e) => { handleChange(e); }} />
            </Form.Row>
            <Form.Row>
                <Button variant="primary" type="submit">
                    Sign Up
        </Button>
            </Form.Row>

        </Form>
    );
}