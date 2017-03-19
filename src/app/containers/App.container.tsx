import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../actions';
import { AppComponent } from '../components';

const mapStateToProps = (state, ownProps) => {
    return {
        isNavigationOpen: state.app.isNavigationOpen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
