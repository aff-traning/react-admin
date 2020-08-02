import React, { useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../../utils/auth';

const PrivateRoute = (props) => {
  const { children, authPathRedirect } = props;
  useEffect(() => {
    console.log('Private route did mount')
  }, []);

  return (
    <Fragment>
      {isAuthenticated() ? children : <Redirect to={authPathRedirect} />}
    </Fragment>
  );
}

export default PrivateRoute;
