import {
    PRODUCT_GET_LIST_SUPPLIER,
    PRODUCT_SET_LIST_SUPPLIER
} from '../constants/actionTypes';

const getListSupplier = (data) => {
    console.log('Get list supplier ACTION');
    return {
        type: PRODUCT_GET_LIST_SUPPLIER,
        payload: data
    }
}

const setListSupplier = (data) => {
    console.log('Set list supplier');
    return {
        type: PRODUCT_SET_LIST_SUPPLIER,
        payload: data
    }
};

export { getListSupplier, setListSupplier };