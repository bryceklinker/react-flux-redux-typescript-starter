import * as React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { browserHistory } from 'react-router';

import { Navigation } from './Navigation';
import { HeaderBar } from './HeaderBar';
import { IHaveActionsProps } from '../../shared';

export interface IAppState {
}

export interface IAppProps extends IHaveActionsProps {
    isNavigationOpen: boolean;
    children: any[];
}

export class AppComponent extends React.Component<IAppProps, IAppState> {
    constructor(props, context) {
        super(props, context);

        this.toggleNavigation = this.toggleNavigation.bind(this);
        browserHistory.listen((loc) => this.afterLocationChanged());
    }

    public render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
                <div>
                    <HeaderBar toggleNavigation={this.toggleNavigation} />
                    <Navigation open={this.props.isNavigationOpen} />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }

    private toggleNavigation() {
        this.props.actions.toggleNavigation();
    }

    private afterLocationChanged() {
        this.props.actions.closeNavigation();
    }
}
