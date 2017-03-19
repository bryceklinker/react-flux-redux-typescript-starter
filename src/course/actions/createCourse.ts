import { IAction } from '../../shared';
import { ICourse } from '../models';

export const CREATE_COURSE = 'CREATE_COURSE';

export interface ICreateCourseAction extends IAction {
    course: ICourse;
}

export function createCourse(course): ICreateCourseAction {
    return { type: CREATE_COURSE, course };
}
