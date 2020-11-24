import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import TopMenu from './TopMenu';
import MainContent from './MainContent';

function MasterLayout(props) {
  const { children, ...rest } = props;
  // const { match, width, navStyle } = useSelector(state => ({
  //   match: state.settings.match,
  //   width: state.settings.width,
  //   navStyle: state.settings.navStyle
  // }));

  return (
    <>
      <LeftSidebar />
      <div className="pusher pushable">
        <RightSidebar />
        <div className="pusher">
          <TopMenu />
          <MainContent>
            {children}
          </MainContent>
        </div>
      </div>
    </>
  )
}

export default MasterLayout;
