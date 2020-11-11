import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

function MasterLayout(props) {
  const { children, ...rest } = props;
  // const { match, width, navStyle } = useSelector(state => ({
  //   match: state.settings.match,
  //   width: state.settings.width,
  //   navStyle: state.settings.navStyle
  // }));

  return (
    <Container>
      {children}
    </Container>
  )
}

export default MasterLayout;
