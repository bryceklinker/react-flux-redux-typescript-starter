import { combineReducers } from 'redux';
import { courseReducer } from '../course';
import { appReducer } from '../app';

export const rootReducer = combineReducers({
    app: appReducer,
    courses: courseReducer
});
