import auth from './auth';
import user from './user';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    auth: auth,
    user: user
});

export default allReducers;