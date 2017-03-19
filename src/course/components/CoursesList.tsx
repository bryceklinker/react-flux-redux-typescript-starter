import * as React from 'react';

import { CourseListItem } from './CourseListItem';
import { ICourse } from '../models';

export interface ICoursesListProps {
    courses: ICourse[];
}

export const CoursesList = (props: ICoursesListProps) => {
    const courses = props.courses.map((c, i) => <CourseListItem key={i} course={c} />);
    return (
        <div>
            {courses}
        </div>
    );
};
