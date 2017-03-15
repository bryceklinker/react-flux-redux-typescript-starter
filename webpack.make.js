var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = function make(env) {
    return {
        devtool: 'source-map',
        target: 'web',
        entry: getEntry(env),
        output:  {
            path: path.join(__dirname, 'dist'),
            filename: 'js/[name].js',
            sourceMapFilename: '[file].map'
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

function getEntry(env) {
    if (isTest(env)) 
        return undefined;

    return {
        index: './src/index.tsx'
    };
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