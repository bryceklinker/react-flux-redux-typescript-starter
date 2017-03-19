import * as React from 'react';

import { IHaveActionsProps } from '../../shared';
import { ICourse } from '../models';

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
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}

                <h2>Add Course</h2>

                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                <input type="submit" onClick={this.onClickSave} />
            </div>
        );
    }

    private courseRow(course: ICourse, index: number) {
        return <div key={index}>{course.title}</div>;
    }

    private onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }

    private onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course });
    }
}
