import * as React from 'react';
import { ChangeEvent } from 'react';

import { ICourse } from '../models';
import { CoursesList } from './CoursesList';

export interface ICoursesProps {
    courses: ICourse[];
    course: ICourse;
    onClickSave: () => void;
    onTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Courses = (props: ICoursesProps) => {
    return (
        <div>
            <h1>Courses</h1>
            <h2>Add Course</h2>

            <input type="text" onChange={props.onTitleChange} value={props.course.title} />
            <input type="submit" onClick={props.onClickSave} />

            <CoursesList courses={props.courses} />
        </div>
    );
};
