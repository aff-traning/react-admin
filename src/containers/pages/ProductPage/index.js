import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import NewProductBtn from './NewProductBtn'
import Deposits from './Deposits/Deposits'
import { getListSupplier } from '../../../actions/product'

import depositData from './DepositData.json'

function ProductPage(props) {
  const dispatch = useDispatch();
  const accessToken = 'Bearer ' + useSelector(state => state.auth.accessToken);
  const listSupplier = async () => dispatch(getListSupplier({ keyword: null, sorting: 'name', skipCount: 0, maxResultCount: 12, accessToken: accessToken }));
  const result = listSupplier();
  // console.log('list1: ', listSupplier);
  // console.log('list2: ', result);
  let listSup = useSelector(state => state.list);
  console.log('list3: ', listSup);

  return (
    <div>
      <NewProductBtn />
      <h1>Total Count: </h1>
      <Deposits title="List Supplier" count={listSup.totalCount} data={listSup.items} />
      {/* <Deposits title="New Products" count={2} data={depositData.active} />
      <Deposits title="Old Products" count={8} data={depositData.closed} /> */}
    </div>
  )
}

export default ProductPage;