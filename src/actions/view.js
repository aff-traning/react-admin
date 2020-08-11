import { VIEW_PAGE } from '../constants/actionTypes';
  
  export const viewPage = (data) => {
    
    return {
      type: VIEW_PAGE,
      payload: data
    }
  };
  