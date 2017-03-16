import * as React from 'react';
import { AppBar } from 'material-ui';

export interface IHeaderBarProps {

}

const toggleNavigation = () => {
    console.log('toggling');
};

export const HeaderBar = (props: IHeaderBarProps) => {
    return (
        <AppBar onLeftIconButtonTouchTap={toggleNavigation} />
    );
};
