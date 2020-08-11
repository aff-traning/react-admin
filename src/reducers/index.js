import auth from './auth';
import user from './user';
import role from './role';
import view from './view';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    auth: auth,
    user: user,
    role: role,
    view: view
});

export default allReducers;