import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import NewProductBtn from './NewProductBtn'
import Deposits from './Deposits/Deposits'
import { getListSupplier } from '../../../actions/product'

import depositData from './DepositData.json'

function ProductPage(props) {
  const dispatch = useDispatch();
  const listSupplier = async () => {
    dispatch(getListSupplier({ keyword: null, sorting: 'name', skipCount: 0, maxResultCount: 12 }));
  }
  console.log('hello');
  console.log(listSupplier);
  console.log(depositData);

  return (
    <div>
      <NewProductBtn />
      <button onClick={listSupplier}>Get list Supplier</button>
      <Deposits title="New Products" count={2} data={depositData.active} />
      <Deposits title="Old Products" count={8} data={depositData.closed} />
    </div>
  )
}

export default ProductPage;