import ui from './ui';
import auth from './auth';
import user from './user';
import role from './role';
import userRole from './user-role';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    ui: ui,
    auth: auth,
    user: user,
    role: role,
    userRole: userRole,
});

export default allReducers;