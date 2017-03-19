import { ICreateCourseAction } from '../actions';

const createCourseReducer = (state, action: ICreateCourseAction) => {
    return [...state, Object.assign({}, action.course)];
};

const reducers = {
    CREATE_COURSE: createCourseReducer,
};

export function courseReducer(state = [], action: ICreateCourseAction) {
    if (reducers.hasOwnProperty(action.type)) {
        return reducers[action.type](state, action);
    }
    return state;
}
