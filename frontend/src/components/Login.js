import React from 'react'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { loginUrl } from './res/urls';

export const Login = () => {

    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(state),
            mode: 'cors'
        }).catch((error) => { console.log(error); })
    }


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({
            ...state,
            [name]: value,
        });
    }
    return (<div><Form onSubmit={(e) => { handleSubmit(e); }}>
        <Form.Row><h2>Login</h2></Form.Row>
        <Form.Row>
            <Form.Label htmlFor="username">Email</Form.Label>
            <Form.Control type='email' name="username" required={true} onChange={(e) => { handleChange(e); }} />
        </Form.Row>
        <Form.Row>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control type='password' name="password" required={true} onChange={(e) => { handleChange(e); }} />
        </Form.Row>
        <Form.Row>
            <Button type='submit'>Login</Button>
        </Form.Row>
    </Form></div>);
}