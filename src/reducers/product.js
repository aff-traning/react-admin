import {
  PRODUCT_SET_LIST_SUPPLIER
} from '../constants/actionTypes';
import { useStore } from 'react-redux';

const initialState = {
  totalCount: 0,
  items: [{
    address: null,
    creationTime: null,
    creatorId: null,
    emailAddress: null,
    id: null,
    lastModificationTime: null,
    lastModifierId: null,
    name: null,
    phoneNumber: null,
    webSite: null
  }]
}

export default function list(state = [], action) {
  let listSupplierState = state;

  switch (action.type) {
    case PRODUCT_SET_LIST_SUPPLIER:
      console.log('Product Reducer: ', state, action);
      listSupplierState = {
        ...action.payload,
      };
      break;

      default:
        listSupplierState = state;
  }

  return listSupplierState;
}