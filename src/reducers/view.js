import { VIEW_PAGE } from '../constants/actionTypes';
  
  const initialState = {
    view: 'dashboard'
  };
  
  export default function view(state = initialState, action) {
    let viewState = state;
    console.log('REDUCER');
    switch (action.type) {
      case VIEW_PAGE:
        viewState = {
            view: action.payload
        };
        break;
  
        default:
            viewState = state;
    }
  
    return viewState;
  }