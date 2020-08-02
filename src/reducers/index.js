import auth from './auth';
import user from './user';
import role from './role';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    auth: auth,
    user: user,
    role: role
});

export default allReducers;