import React from 'react';
import NewProductBtn from './NewProductBtn'
import Deposits from './Deposits/Deposits'
import { useSelector, useDispatch } from 'react-redux';
import { viewPage } from "../../../actions/view";

import depositData from './DepositData.json'

function ProductPage() {
  const dispatch = useDispatch();
  const view = 'products';
  console.log('view: ', view);
  const viewPage2 = () => dispatch(viewPage({view}));

  return (
    <div>
      <NewProductBtn />
      <button onClick={viewPage2}>click</button>
      <Deposits title="New Products" count={2} data={depositData.active} />
      <Deposits title="Old Products" count={8} data={depositData.closed} />
    </div>
  )
}

export default ProductPage;