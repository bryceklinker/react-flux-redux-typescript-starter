var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = function make(env) {
    return {
        devtool: 'source-map',
        entry: [
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client?reload=true',
            './src/index.tsx'
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/index.js',
            publicPath: '/',
            sourceMapFilename: '[file].map'
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'dist')
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
        },
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.(ts|tsx)$/,
                    loader: 'tslint-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(ts|tsx)$/,
                    loader: 'awesome-typescript-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(css|sass)$/,
                    loader: 'style-loader!css-loader!sass-loader'
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                }
            ]
        },
        plugins: getPlugins(env)
    };
}

function getPlugins(env) {
    let plugins = [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            filename: 'index.html'
        })
    ];


    if (isProd(env)) {
        plugins.push(new webpack.optimize.UglifyJsPlugin());
        plugins.push(new webpack.optimize.DedupePlugin());
        plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    }

    return plugins;
}

function isProd(env) {
    return env === 'prod';
}

function isTest(env) {
    return env === 'test';
}

function isDev(env) {
    return env === 'dev';
}