import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../../../actions/ui';
import { Icon, Button } from 'semantic-ui-react'

const TopMenu = () => {

  const leftMenuVisible = useSelector(state => state.ui.leftMenuVisible);
  const dispatch = useDispatch();
  const toggleLeftMenu = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className={`navslide navwrap ${!leftMenuVisible ? 'marginlefting' : ''}`}>
      <div className="ui menu icon borderless grid" data-color="inverted white">
        <Button className="item" onClick={toggleLeftMenu}>
          {/* <i className="ion-navicon-round big icon"></i> */}
          <Icon name="bars" size="large" />
        </Button>
        <div className="item ui colhidden">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search icon"></i>
          </div>
        </div>
        <div className="right menu colhidden">

          <div className="ui dropdown item labeled icon">
            <i className="bell icon"></i>
            <div className="ui red label mini circular">6</div>
            <div className="menu">
              <div className="header">
                People You Might Know
                                </div>
              <div className="item">
                <img className="ui avatar image" src="img/avatar/people/enid.png" alt="label-image" /> Janice Robinson
                                </div>
              <div className="item">
                <img className="ui avatar image" src="img/avatar/people/Hershell.png" alt="label-image" /> Cynthia May
                                </div>
              <div className="item">
                <img className="ui avatar image" src="img/avatar/people/Rick.png" alt="label-image" /> Hugh Carter
                                </div>
              <div className="header">
                Your Friends' Friends
                                </div>
              <div className="item">
                <img className="ui avatar image" src="img/avatar/people/Meggie.png" alt="label-image" /> Pauline Cain
                                </div>
              <div className="item">
                <img className="ui avatar image" src="img/avatar/people/Glenn.png" alt="label-image" /> Marco Beck
                                </div>
              <div className="item">
                <img className="ui avatar image" src="img/avatar/people/Daryl.png" alt="label-image" /> Sue Quinn
                                </div>
            </div>
          </div>
          <div className="ui dropdown item">
            Language <i className="dropdown icon"></i>
            <div className="menu">
              <a className="item"><i className="united kingdom flag"></i>English</a>
              <a className="item"><i className="turkey flag"></i>Turkish</a>
              <a className="item"><i className="spain flag"></i>Spanish</a>
            </div>
          </div>
          <div className="ui dropdown item">
            <img className="ui mini circular image" src="img/avatar/people/enid.png" alt="label-image" />
            <div className="menu">
              <a className="item" href="mail.html">Inbox</a>
              <a className="item" href="profile.html">Profile</a>
              <a className="item" href="settings.html">Settings</a>
              <div className="ui divider"></div>
              <a className="item">Need Help?</a>
              <a className="item" href="login.html">Sign Out</a>
            </div>
          </div>
          <a className="item labeled rightsidebar computer only">
            <i className="ion-wrench large icon"></i>
          </a>

        </div>
      </div>
    </div>
  );
};

export default TopMenu;

