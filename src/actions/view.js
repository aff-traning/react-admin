import { VIEW_PAGE } from '../constants/actionTypes';
  
  export const viewPage = (data) => {
    console.log('ACTION');
    return {
      type: VIEW_PAGE,
      payload: data
    }
  };
  