import {
  PRODUCT_SET_LIST_SUPPLIER
} from '../constants/actionTypes';
import { useStore } from 'react-redux';

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