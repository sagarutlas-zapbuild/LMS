import React from 'react'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { loginUrl } from './res/urls';
import { Redirect } from 'react-router-dom';

export const Login = () => {

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append("email", state.email);
        formdata.append("password", state.password);

        fetch(loginUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(state),
          })
            .then(res => res.json())
            .then(json => {
              localStorage.setItem('token', json.token);
              localStorage.setItem('id', json.user.id);
              localStorage.setItem('email', json.user.email);
              localStorage.setItem('name', json.user.name);
              localStorage.setItem('is_type', json.user.is_type)
            }).catch((err) => {
              console.log(err);
            });
    }


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({
            ...state,
            [name]: value,
        });
    }
    if (localStorage.getItem('token') ? true : false) {
        if(localStorage.getItem('is_type') === "Student"){
            return <Redirect to = "/student"/>
        }
    }
    else{
    return (<div><Form onSubmit={(e) => { handleSubmit(e); }}>
        <Form.Row><h2>Login</h2></Form.Row>
        <Form.Row>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type='email' name="email" required={true} onChange={(e) => { handleChange(e); }} />
        </Form.Row>
        <Form.Row>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control type='password' name="password" required={true} onChange={(e) => { handleChange(e); }} />
        </Form.Row>
        <Form.Row>
            <Button type='submit'>Login</Button>
        </Form.Row>
    </Form></div>);}
}