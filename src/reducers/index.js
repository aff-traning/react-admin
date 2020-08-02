import auth from './auth';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    auth: auth,
});

export default allReducers;