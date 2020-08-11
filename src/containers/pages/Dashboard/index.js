import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { viewPage } from "../../../actions/view";

function Dashboard() {
  const dispatch = useDispatch();
  const view = 'dashboard';
  const viewSelected = () => dispatch(viewPage({view}));
  viewSelected();

  return(
    <div>This is dashboard</div>
    // <MasterLayout>
    //   <div>This is dashboard</div>
    // </MasterLayout>
  )
}

export default Dashboard;