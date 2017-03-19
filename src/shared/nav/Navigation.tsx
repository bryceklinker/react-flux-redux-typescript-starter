import * as React from 'react';
import { Link } from 'react-router';
import { Drawer, FlatButton } from 'material-ui';

export interface INavigationProps {
    open: boolean;
}

export const Navigation = (props: INavigationProps) => {
    const style = {
        width: '100%',
    };
    return (
        <Drawer open={props.open}>
            <FlatButton style={style} label="Home" containerElement={<Link to="/" />} />
            <FlatButton style={style} label="About" containerElement={<Link to="/about" />} />
            <FlatButton style={style} label="Courses" containerElement={<Link to="/courses" />} />
        </Drawer>
    );
};
