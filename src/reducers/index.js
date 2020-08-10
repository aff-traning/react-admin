import auth from './auth';
import user from './user';
import role from './role';
import list from './product';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    auth: auth,
    user: user,
    role: role,
    list: list
});

export default allReducers;