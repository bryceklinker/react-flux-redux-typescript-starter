import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { AboutPage } from '../about';
import { App } from '../app';
import { HomePage } from '../home';
import { CoursesPage } from '../course';

export const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="courses" component={CoursesPage} />
    </Route>
);
