import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import webpackCommonConfig from './common';

const ROOT = path.resolve(__dirname);

export const productionPlugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
];

export default {
    ...webpackCommonConfig,
    output: {
        ...webpackCommonConfig.output,
        path: path.join(ROOT, '../../../'),
        filename: 'scripts/2014/cart/[name].js'
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
        ...productionPlugins,
        new webpack.optimize.CommonsChunkPlugin('vendor', 'scripts/2014/cart/[name].js'),
        new ExtractTextPlugin('css/new-cart-bundle.css', {
            allChunks: true
        })
    ],
    profile: true
};
