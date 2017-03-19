import * as React from 'react';

import { ICourse } from '../models';

export interface ICourseListItemProps {
    course: ICourse;
}

export const CourseListItem = (props: ICourseListItemProps) => {
    return <div >{props.course.title}</div>;
};
