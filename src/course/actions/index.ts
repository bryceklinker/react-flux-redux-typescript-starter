import { ActionCreatorsMapObject } from 'redux';

import { createCourse } from './createCourse';

export { ICreateCourseAction } from './createCourse';

export const actions: ActionCreatorsMapObject = {
    createCourse
};
