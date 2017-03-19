import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ICourse } from '../models';
import { actions } from '../actions';
import { CoursesPageComponent } from '../components';

const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export const CoursesPage = connect(mapStateToProps, mapDispatchToProps)(CoursesPageComponent);
