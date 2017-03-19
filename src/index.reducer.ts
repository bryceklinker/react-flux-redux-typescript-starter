import { combineReducers } from 'redux';
import { courseReducer } from './course';

export const rootReducer = combineReducers({
    courses: courseReducer
});
