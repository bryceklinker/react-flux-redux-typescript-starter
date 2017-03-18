import * as open from 'open';
import * as express from 'express';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';
import * as path from 'path';

import * as make from '../webpack.make';

const port = 3000;
const config = make('dev');
const compiler = webpack([config]);

const app = express();

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res, next) => {
    res.sendFile('/index.html');
})

app.listen(port, (err) => {
    if (err) {
        console.log('Failed to start server: ' + err)
    } else {
        open(`http://localhost:${port}`);
    }
})