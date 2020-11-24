import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';

const MainContent = ({ children, ...rest }) => {

  const leftMenuVisible = useSelector(state => state.ui.leftMenuVisible);

  return (
    <div className={`mainWrap navslide ${!leftMenuVisible ? 'marginlefting' : ''}`}>
      <Grid padded>
        <Grid.Column>
          {children}
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default MainContent;
