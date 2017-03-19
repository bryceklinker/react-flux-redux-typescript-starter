import { ActionCreatorsMapObject } from 'redux';

import { createCourse } from './createCourse';

export { ICreateCourseAction, CREATE_COURSE } from './createCourse';

export const actions: ActionCreatorsMapObject = {
    createCourse
};
