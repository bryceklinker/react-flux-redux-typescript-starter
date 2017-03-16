import * as React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { routes } from './routes';

injectTapEventPlugin();
render(<Router history={browserHistory} routes={routes} />,
    document.getElementById('root'),
);
