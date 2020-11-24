import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Sidebar, Dropdown, Menu, Accordion, Icon } from 'semantic-ui-react'
import { Link, useRouteMatch } from 'react-router-dom';

const LeftSidebar = () => {

  const leftMenuVisible = useSelector(state => state.ui.leftMenuVisible);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index

    setActiveIndex(newIndex);
  }
  const RouteMatch = (withPath) => {
    const match = useRouteMatch({
      path: withPath,
      strict: true,
      sensitive: true
    });

    return match;
  };

  return (
    <div
    // className="ui sidebar vertical left menu overlay  borderless visible sidemenu inverted  grey"
    // style={{ WebkitTransitionDuration: '0.1s', transitionDuration: '0.1s' }}
    // data-color="grey"
    >
      <Sidebar as={Menu}
        vertical
        // direction="left"
        borderless
        color="grey"
        inverted
        animation='overlay'
        visible
        icon={!leftMenuVisible}
        width={!leftMenuVisible ? 'very thin' : ''}
        style={{ WebkitTransitionDuration: '0.3s', transitionDuration: '0.3s', overflow: 'visible!important' }}>
        <a className="item logo" href="index.html">
          <img src="img/logo.png" alt="stagblogo" />
          <img src="img/thumblogo.png" alt="stagblogo" className="displaynone" />
        </a>

        {leftMenuVisible ?
          <>
            <Menu.Item
              index={0}
              // link
              size="large"
              active={RouteMatch("/")?.isExact}
              as={Link}
              to="/"
            >
              <Icon name="dashboard" className="titleIcon" />
              <span>Dashboard</span>
              {/* <Link to="/">
              </Link> */}
            </Menu.Item>
            <Menu.Item
              index={1}
              // link
              active={RouteMatch("/users")}
              as={Link}
              to="/users"
            >
              <Icon name="users" className="titleIcon" />
              <span>Users</span>
              {/* <Link to="/users">
              </Link> */}
            </Menu.Item>
            <Menu.Item
              index={2}
              // link
              active={RouteMatch("/roles")}
              as={Link}
              to="/roles"
            >
              <Icon name="universal access" className="titleIcon" />
              <span>Roles</span>
              {/* <Link to="/roles">
              </Link> */}
            </Menu.Item>

            {/* // <Accordion inverted>

          //   <Accordion.Title
          //     active={activeIndex === 1}
          //     index={1}
          //     onClick={handleClick}
          //     as={Menu.Item}
          //   >
          //     <Icon name="identity" className="titleIcon" />
          //     <span>Identity</span>
          //     <Icon name='dropdown' />
          //   </Accordion.Title>
          //   <Accordion.Content active={activeIndex === 1} >
          //     <a className="item transition" href="/users">
          //       Users
          //     </a>
          //     <a className="item transition" href="/roles">
          //       Roles
          //     </a>
          //   </Accordion.Content>
          // </Accordion> */}
          </>
          :
          <>
            {/* <Dropdown item text='DB'>
              <Dropdown.Menu>
                <Dropdown.Item icon='edit' text='Edit Profile' />
                <Dropdown.Item icon='globe' text='Choose Language' />
                <Dropdown.Item icon='settings' text='Account Settings' />
              </Dropdown.Menu>
            </Dropdown> */}

            <Menu.Item
              index={0}
              // link
              active={RouteMatch("/").isExact}
              as={Link}
              to="/"
            >
              <Icon name="dashboard" size="large" />
              {/* <Link to="/">
              </Link> */}
            </Menu.Item>

            <Menu.Item
              index={1}
              link
              active={RouteMatch("/users")}
            >
              <Link to="/users">
                <Icon name="users" size="large" />
              </Link>
            </Menu.Item>

            <Menu.Item
              index={2}
              link
              active={RouteMatch("/roles")}
            >
              <Link to="/roles">
                <Icon name="universal access" size="large" />
              </Link>
            </Menu.Item>

            {/* <div className="ui dropdown item scrolling">
              <span>

                <Icon name="dashboard" size="large" />
              </span>
              <div className="menu">
                <div className="header">Dashboard</div>
                <div className="ui divider"></div>
                <a className="item" href="index.html">
                  Dashboard v1
                </a>
              </div>
            </div>

            <div className="ui dropdown item scrolling">
              <span>Apps</span>
              <i className="ion-ios-lightbulb icon"></i>
              <div className="menu">
                <div className="header">Apps</div>
                <div className="ui divider"></div>
                <a className="item" href="inbox.html">
                  Inbox
          </a>
                <a className="item" href="filter.html">
                  Filter
          </a>
                <a className="item" href="todo.html">
                  Todo
          </a>
              </div>
            </div>
           */}
          </>
        }
        {/* <div className="ui divider"></div>
        <a className="item" href="typography.html">
          <i className="ion-printer icon"></i>{" "}
          <span className="colhidden">Typography</span>
        </a>
        <a className="item" href="document.html">
          <i className="ion-code icon"></i> <span className="colhidden">Document</span>
        </a>*/}
      </Sidebar>
    </div >
  );
};

export default LeftSidebar;
