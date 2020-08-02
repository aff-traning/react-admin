import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Redirect, withRouter, Link } from 'react-router-dom';
import { Button, Form, Message, Input } from "semantic-ui-react";
import {
  requestToken
} from "../../../actions/auth";
import * as authUtils from '../../../utils/auth';
import AuthLayout from '../../layouts/AuthLayout';

function LoginPage(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Login didmount');
    return () => {
      console.log('Login unmount');
    }
  }, []);

  const onLogin = async () => {
    dispatch(requestToken({ userName: username, password: password }));
    await writeLogAsync();
  }

  const writeLogAsync = async (text) => {
    const promise = new Promise((resolve, reject) => {
      if (1 === 1) {
        setTimeout(() => resolve(`i am resolve: ${text}`), 1000)
      } else {
        setTimeout(() => reject("i am rejected!"), 1000)
      }
    });

    try {
      // wait till the promise resolves (*)
      const result = await promise;
      // "i am resolved!"
      console.log(result);
    } catch (ex) {
      console.log(ex);
    }

    // promise.then((res) => {
    //   console.log(res); 
    // }).catch(err => {
    //   console.log(err); 
    // });
  }

  if (authUtils.isAuthenticated(authState)) {
    return (<Redirect to={{ pathname: '/' }} />)
  }

  return (
    <AuthLayout>
      <Form onSubmit={onLogin}>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="User Name"
          className="auth-input-field"
          onChange={e => setUsername(e.target.value)}
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
          className="auth-input-field"
          onChange={e => setPassword(e.target.value)}
        />

        <Button type="submit" color="teal" fluid size="huge">
          Login
      </Button>

        <Message size="big">
          <Link to="/signup">Not Registered?</Link>
        </Message>
      </Form>
    </AuthLayout>
  )
}

export default LoginPage;