import * as React from 'react';
import { AppBar } from 'material-ui';

export interface IHeaderBarProps {
    toggleNavigation: () => void;
}

export const HeaderBar = (props: IHeaderBarProps) => {
    return (
        <AppBar onLeftIconButtonTouchTap={props.toggleNavigation} />
    );
};
