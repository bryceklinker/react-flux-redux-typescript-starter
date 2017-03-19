import { ICreateCourseAction, CREATE_COURSE } from '../actions';
import { IAction } from '../../shared';

const createCourseReducer = (state, action: ICreateCourseAction) => {
    return [...state, Object.assign({}, action.course)];
};

const reducers = {
    [CREATE_COURSE]: createCourseReducer,
};

export function courseReducer(state = [], action: IAction) {
    if (reducers.hasOwnProperty(action.type)) {
        return reducers[action.type](state, <any> action);
    }
    return state;
}
