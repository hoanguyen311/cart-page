import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import webpackCommonConfig from './common';

const ROOT = path.resolve(__dirname, '../dist');
let nodeModules = [];

fs
    .readdirSync('node_modules')
    .filter(x => {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(mod => {
        nodeModules[mod] = `commonjs ${mod}`;
    });

export default {
    ...webpackCommonConfig,
    output: {
        ...webpackCommonConfig.output,
        path: path.join(ROOT, 'server'),
        filename: '[name].js',
        libraryTarget: 'commonjs'
    },
    entry: {
        index: [ './src/server/index' ]
    },
    module: {
        ...webpackCommonConfig.module,
        preLoaders: [
            ...webpackCommonConfig.module.preLoaders,
            {
                test: /\.js$/,
                exclude: [
                    path.resolve('node_modules/')
                ],
                loader: 'babel',
                query: {
                    cacheDirectory: true
                }
            }
        ],
        loaders: [
            ...webpackCommonConfig.module.loaders,
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'null'
            },
            {
                test: /\.less$/,
                loader: 'null'
            }
        ]
    },
    externals: [nodeModules, 'express', 'path'],
    plugins: [
        ...webpackCommonConfig.plugins,
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    profile: true
};
