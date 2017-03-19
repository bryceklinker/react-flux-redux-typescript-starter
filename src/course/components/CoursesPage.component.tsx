import * as React from 'react';
import { ChangeEvent } from 'react';

import { IHaveActionsProps } from '../../shared';
import { ICourse } from '../models';
import { Courses } from './Courses';

export interface ICoursePageState {
    course: ICourse;
}

export interface ICoursePageProps extends IHaveActionsProps {
    courses: ICourse[];
}

export class CoursesPageComponent extends React.Component<ICoursePageProps, ICoursePageState> {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {
                title: 'hello',
            },
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    public render() {
        return (
            <Courses
                course={this.state.course}
                courses={this.props.courses}
                onClickSave={this.onClickSave}
                onTitleChange={this.onTitleChange}
            />
        );
    }

    private onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }

    private onTitleChange(event: ChangeEvent<HTMLInputElement>) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course });
    }
}
