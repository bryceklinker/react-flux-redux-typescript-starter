import * as React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Navigation, HeaderBar } from './shared';

export interface IAppProps {
    children: any[];
}

export const App = (props: IAppProps) => {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
            <div>
                <HeaderBar />
                <Navigation />
                {props.children}
            </div>
        </MuiThemeProvider>
    );
};
