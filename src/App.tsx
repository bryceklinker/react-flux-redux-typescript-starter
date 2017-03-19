import * as React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { browserHistory } from 'react-router';

import { Navigation, HeaderBar } from './shared';

export interface IAppState {
    isNavigationOpen: boolean;
}

export interface IAppProps {
    children: any[];
}

export class App extends React.Component<IAppProps, IAppState> {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isNavigationOpen: false,
        };
        this.toggleNavigation = this.toggleNavigation.bind(this);
        browserHistory.listen((loc) => this.afterLocationChanged());
    }

    public render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
                <div>
                    <HeaderBar toggleNavigation={this.toggleNavigation} />
                    <Navigation open={this.state.isNavigationOpen} />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }

    private toggleNavigation() {
        this.setState({ isNavigationOpen: !this.state.isNavigationOpen });
    }

    private afterLocationChanged() {
        this.setState({ isNavigationOpen: false });
    }
}
