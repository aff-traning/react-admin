import React from "react";

const RightSidebar = () => {
  return (
    <div className="ui right sidebar">
      <div className="ui pointing secondary two item tabular menu">
        <a className="item active" data-tab="first"><i className="red icon ion-chatbox-working icon"></i></a>

        <a className="item" data-tab="fourth"><i className="blue icon ion-gear-a"></i></a>
      </div>
      <div className="ui tab active" data-tab="first">
        <div className="ui small feed">
          <h4 className="ui header">Followers Activity</h4>
          <div className="event">
            <div className="label">
              <img src="img/avatar/people/Abraham.png" alt="label-image" />
            </div>
            <div className="content">
              <div className="date">
                3 days ago
                            </div>
              <div className="summary">
                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                            </div>
            </div>
          </div>
          <div className="event">
            <div className="label">
              <img src="img/avatar/people/carol.png" alt="label-image" />
            </div>
            <div className="content">
              <div className="summary">
                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                <div className="date">
                  3 days ago
                                </div>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="label">
              <img src="img/avatar/people/Daryl.png" alt="label-image" />
            </div>
            <div className="content">
              <div className="date">
                3 days ago
                            </div>
              <div className="summary">
                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                            </div>
            </div>
          </div>
          <div className="event">
            <div className="label">
              <img src="img/avatar/people/deana.png" alt="label-image" />
            </div>
            <div className="content">
              <div className="summary">
                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                <div className="date">
                  3 days ago
                                </div>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="label">
              <img src="img/avatar/people/enid.png" alt="label-image" />
            </div>
            <div className="content">
              <div className="date">
                3 days ago
                            </div>
              <div className="summary">
                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                            </div>
            </div>
          </div>
          <div className="event">
            <div className="label">
              <img src="img/avatar/people/Glenn.png" alt="label-image" />
            </div>
            <div className="content">
              <div className="summary">
                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                <div className="date">
                  3 days ago
                                </div>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="label">
              <img src="img/avatar/people/Hershell.png" alt="label-image" />
            </div>
            <div className="content">
              <div className="date">
                3 days ago
                            </div>
              <div className="summary">
                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                            </div>
            </div>
          </div>
          <div className="event">
            <div className="label">
              <img src="img/avatar/people/Hershell.png" alt="label-image" />
            </div>
            <div className="content">
              <div className="summary">
                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                <div className="date">
                  3 days ago
                                </div>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="label">
              <img src="img/avatar/people/Meggie.png" alt="label-image" />
            </div>
            <div className="content">
              <div className="date">
                3 days ago
                            </div>
              <div className="summary">
                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                            </div>
            </div>
          </div>
          <div className="event">
            <div className="label">
              <img src="img/avatar/people/Michonne.png" alt="label-image" />
            </div>
            <div className="content">
              <div className="summary">
                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                <div className="date">
                  3 days ago
                                </div>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="label">
              <img src="img/avatar/people/Rick.png" alt="label-image" />
            </div>
            <div className="content">
              <div className="date">
                3 days ago
                            </div>
              <div className="summary">
                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                            </div>
            </div>
          </div>
          <div className="event">
            <div className="label">
              <img src="img/avatar/people/Tara.png" alt="label-image" />
            </div>
            <div className="content">
              <div className="summary">
                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                <div className="date">
                  3 days ago
                                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ui tab" data-tab="fourth">
        <div className="ui form fluid">
          <div className="grouped fields">
            <label>Connection Limited</label>
            <div className="field">
              <div className="ui slider checkbox">
                <input type="radio" name="throughput" defaultChecked />
                <label>20 mbps max</label>
              </div>
            </div>
            <div className="field">
              <div className="ui slider checkbox">
                <input type="radio" name="throughput" />
                <label>10mbps max</label>
              </div>
            </div>
            <div className="field">
              <div className="ui slider checkbox">
                <input type="radio" name="throughput" />
                <label>5mbps max</label>
              </div>
            </div>
            <div className="field">
              <div className="ui slider checkbox checked">
                <input type="radio" name="throughput" />
                <label>Unmetered</label>
              </div>
            </div>
          </div>
        </div>
        <div className="ui divider"></div>
        <div className="ui form fluid">
          <div className="grouped fields">
            <label>Notifications</label>
            <div className="field">
              <div className="ui toggle checkbox">
                <input type="checkbox" defaultChecked name="public" />
                <label className="coloring red">Enabled</label>
              </div>
            </div>
            <div className="field">
              <div className="ui toggle checkbox">
                <input type="checkbox" name="public" />
                <label className="coloring green">Updates</label>
              </div>
            </div>
            <div className="field">
              <div className="ui toggle checkbox">
                <input type="checkbox" name="public" />
                <label>Comments</label>
              </div>
            </div>
            <div className="field">
              <div className="ui toggle checkbox">
                <input type="checkbox" name="public" />
                <label>Chat</label>
              </div>
            </div>
          </div>
        </div>
        <div className="ui divider"></div>

        <h4 className="ui header">Navbar Color</h4>
        <div className="ui basic segment">

          <ul className="colorlist">
            <li>
              <a className="ui segment yellow inverted" data-addclass="inverted yellow">
              </a>
            </li>
            <li>
              <a className="ui segment red inverted" data-addclass="inverted red">
              </a>
            </li>
            <li>
              <a className="ui segment blue inverted" data-addclass="inverted blue">
              </a>
            </li>
            <li>
              <a className="ui segment black inverted" data-addclass="inverted black">
              </a>
            </li>
            <li>
              <a className="ui segment orange inverted" data-addclass="inverted orange">
              </a>
            </li>
            <li>
              <a className="ui segment pink inverted" data-addclass="inverted pink">
              </a>
            </li>
            <li>
              <a className="ui segment green inverted" data-addclass="inverted green">
              </a>
            </li>
            <li>
              <a className="ui segment purple inverted" data-addclass="inverted purple">
              </a>
            </li>
            <li>
              <a className="ui segment violet inverted" data-addclass="inverted violet">
              </a>
            </li>
            <li>
              <a className="ui segment brown inverted" data-addclass="inverted brown">
              </a>
            </li>
            <li>
              <a className="ui segment teal inverted" data-addclass="inverted teal">
              </a>
            </li>
            <li>
              <a className="ui segment greenli inverted" data-addclass="inverted greenli">
              </a>
            </li>
            <li>
              <a className="ui segment grey inverted" data-addclass="inverted grey">
              </a>
            </li>
            <li>
              <a className="ui segment redli inverted" data-addclass="inverted redli">
              </a>
            </li>
            <li>
              <a className="ui segment yellowli inverted" data-addclass="inverted yellowli">
              </a>
            </li>
            <li>
              <a className="ui segment blueli inverted" data-addclass="inverted blueli">
              </a>
            </li>
            <li>
              <a className="ui segment darkpurpleli inverted" data-addclass="inverted darkpurpleli">
              </a>
            </li>
            <li>
              <a className="ui segment darkorangeli inverted" data-addclass="inverted darkorangeli">
              </a>
            </li>
            <li>
              <a className="ui segment greenli2 inverted" data-addclass="inverted greenli2">
              </a>
            </li>
            <li>
              <a className="ui segment pinkli inverted" data-addclass="inverted pinkli">
              </a>
            </li>
            <li>
              <a className="ui segment lightyellowli inverted" data-addclass="inverted lightyellowli">
              </a>
            </li>
            <li>
              <a className="ui segment darkli inverted" data-addclass="inverted darkli">
              </a>
            </li>
            <li>
              <a className="ui segment lightbrownli inverted" data-addclass="inverted lightbrownli">
              </a>
            </li>
          </ul>
        </div>
        <h4 className="ui header">Sidebar Color</h4>
        <div className="ui basic segment">

          <ul className="sidecolor">
            <li>
              <a className="ui segment yellow inverted" data-addclass="inverted yellow">
              </a>
            </li>
            <li>
              <a className="ui segment red inverted" data-addclass="inverted red">
              </a>
            </li>
            <li>
              <a className="ui segment blue inverted" data-addclass="inverted blue">
              </a>
            </li>
            <li>
              <a className="ui segment black inverted" data-addclass="inverted black">
              </a>
            </li>
            <li>
              <a className="ui segment orange inverted" data-addclass="inverted orange">
              </a>
            </li>
            <li>
              <a className="ui segment pink inverted" data-addclass="inverted pink">
              </a>
            </li>
            <li>
              <a className="ui segment green inverted" data-addclass="inverted green">
              </a>
            </li>
            <li>
              <a className="ui segment purple inverted" data-addclass="inverted purple">
              </a>
            </li>
            <li>
              <a className="ui segment violet inverted" data-addclass="inverted violet">
              </a>
            </li>
            <li>
              <a className="ui segment brown inverted" data-addclass="inverted brown">
              </a>
            </li>
            <li>
              <a className="ui segment teal inverted" data-addclass="inverted teal">
              </a>
            </li>
            <li>
              <a className="ui segment greenli inverted" data-addclass="inverted greenli">
              </a>
            </li>
            <li>
              <a className="ui segment grey inverted" data-addclass="inverted grey">
              </a>
            </li>
            <li>
              <a className="ui segment redli inverted" data-addclass="inverted redli">
              </a>
            </li>
            <li>
              <a className="ui segment yellowli inverted" data-addclass="inverted yellowli">
              </a>
            </li>
            <li>
              <a className="ui segment blueli inverted" data-addclass="inverted blueli">
              </a>
            </li>
            <li>
              <a className="ui segment darkpurpleli inverted" data-addclass="inverted darkpurpleli">
              </a>
            </li>
            <li>
              <a className="ui segment darkorangeli inverted" data-addclass="inverted darkorangeli">
              </a>
            </li>
            <li>
              <a className="ui segment greenli2 inverted" data-addclass="inverted greenli2">
              </a>
            </li>
            <li>
              <a className="ui segment pinkli inverted" data-addclass="inverted pinkli">
              </a>
            </li>
            <li>
              <a className="ui segment lightyellowli inverted" data-addclass="inverted lightyellowli">
              </a>
            </li>
            <li>
              <a className="ui segment darkli inverted" data-addclass="inverted darkli">
              </a>
            </li>
            <li>
              <a className="ui segment lightbrownli inverted" data-addclass="inverted lightbrownli">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
