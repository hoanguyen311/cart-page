import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import webpackCommonConfig from './common';

const ROOT = path.resolve(__dirname, '../dist');

export default {
    ...webpackCommonConfig,
    output: {
        ...webpackCommonConfig.output,
        path: path.join(ROOT, 'static'),
        filename: '[name].js'
    },
    entry: {
        vendor: [
            'react',
            'react-dom',
            'rebem',
            'superagent'
        ],
        app: [ ...webpackCommonConfig.entry, './src/index' ]
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
                loader: 'url',
                query: {
                    limit: 50000,
                    name: 'images/[name]-[hash].[ext]'
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?-minimize&sourceMap' +
                    // TODO minimizing breaks source-maps in BOB
                    // 'css?minimize&sourceMap' +
                    '!postcss'
                )
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?-minimize&sourceMap' +
                    // TODO minimizing breaks source-maps in BOB
                    // 'css?minimize&sourceMap' +
                    '!postcss' +
                    '!less?sourceMap'
                )
            }
        ]
    },
    plugins: [
        ...webpackCommonConfig.plugins,
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
        new ExtractTextPlugin('app.css', {
            allChunks: true
        }),
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
