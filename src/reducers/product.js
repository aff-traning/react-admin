import {
  PRODUCT_SET_LIST_SUPPLIER
} from '../constants/actionTypes';

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

export default function list(state = initialState, action) {
  let listSupplierState = state;

  switch (action.type) {
    case PRODUCT_SET_LIST_SUPPLIER:
      listSupplierState = {
        ...action.payload,
      };
      break;

      default:
        listSupplierState = state;
  }

  return listSupplierState;
}