import React from 'react';
import NewProductBtn from './NewProductBtn'
import Deposits from './Deposits/Deposits'
import { useSelector, useDispatch } from 'react-redux';
import { viewPage } from "../../../actions/view";

import depositData from './DepositData.json'

function ProductPage() {
  const dispatch = useDispatch();
  const view = 'products';
  const viewSelected = () => dispatch(viewPage({view}));
  viewSelected();

  return (
    <div>
      <NewProductBtn />
      <Deposits title="New Products" count={2} data={depositData.active} />
      <Deposits title="Old Products" count={8} data={depositData.closed} />
    </div>
  )
}

export default ProductPage;