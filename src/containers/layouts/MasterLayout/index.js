import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../../styles/theme';
import { GlobalStyles } from '../../../styles/global';
import { ThemeContext } from '../../../styles/themeContext';
import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';

function MasterLayout(props) {
  const { children, ...rest } = props;
  // const { match, width, navStyle } = useSelector(state => ({
  //   match: state.settings.match,
  //   width: state.settings.width,
  //   navStyle: state.settings.navStyle
  // }));

  const context = useContext(ThemeContext);
  const { theme } = context;
  const viewPage = useSelector(state => state.view.view);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div>
          <SideBar sidebar={viewPage}/>
          <Main>{children}</Main>
        </div>
      </>
    </ThemeProvider>

    // <div>
    //   {children}
    // </div>
  );
}

export default MasterLayout;
