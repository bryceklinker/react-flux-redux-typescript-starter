var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = function make(env) {
    return {
        devtool: 'source-map',
        entry: {
            app: './src/index.tsx'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].js',
            sourceMapFilename: '[file].map'
        },
        devServer: {
            historyApiFallback: true,
            stats: {
                hash: false,
                version: false,
                timings: false,
                assets: false,
                chunks: false,
                modules: false,
                children: false,
                source: false,
                publicPath: false,
                errors: true,
                errorDetails: true,
                warnings: true
            }
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
                    test: /\.tsx$/,
                    loader: getTsxLoaders(env),
                    exclude: /node_modules/
                },
                {
                    test: /\.ts$/,
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

function getTsxLoaders(env) {
    if (isDev(env)){
        return 'react-hot-loader!awesome-typescript-loader';
    }

    return 'awesome-typescript-loader';
}

function getPlugins(env) {
    let plugins = [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            filename: 'index.html'
        })
    ];


    if (isProd(env)) {
        plugins.push(new webpack.optimize.UglifyJsPlugin());
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