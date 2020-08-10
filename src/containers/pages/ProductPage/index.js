import React from 'react';
import NewProductBtn from './NewProductBtn'
import Deposits from './Deposits/Deposits'
import MasterLayout from '../../layouts/MasterLayout'

import depositData from './DepositData.json'

function ProductPage(props) {

  return (
    <MasterLayout sidebar='products'>
      <NewProductBtn />
      <Deposits title="New Products" count={2} data={depositData.active} />
      <Deposits title="Old Products" count={8} data={depositData.closed} />
    </MasterLayout>
  )
}

export default ProductPage;