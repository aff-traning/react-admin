import React from 'react';

import { Form, Header } from "semantic-ui-react";
import '../../../styles/auth.css';

function AuthLayout(props) {
  const { children, header,...rest } = props;

  console.log('Rest', rest);
  
  return (
    <div className="auth-main">
      <div className="auth-content">
        <div className="auth-card">
          <img src="https://www.simplecode.io/static/58f4e94ce55b0d5f6b82f37747837344/5f5f3/build-admin-template-semantic-ui-react-dashboard-logo.webp" alt="Logo" className="auth-logo" />
          <Header as="h2" color="black" textAlign="center">
            {header}
          </Header>
          <Form.Group size="large" className="auth-form" autoComplete="off">
            {children}
          </Form.Group>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout;