import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import webpackCommonConfig from './common';
const DEFAULT_PORT = 8000;

export default function(port = DEFAULT_PORT) {
    return {
        ...webpackCommonConfig,
        entry: [
            'webpack/hot/only-dev-server',
            `webpack-dev-server/client?http://localhost:${port}`,
            './src/index'
        ],
        output: {
            ...webpackCommonConfig.output,
            path: path.resolve('./'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        devtool: 'cheap-inline-module-source-map',
        module: {
            ...webpackCommonConfig.module,
            loaders: [
                ...webpackCommonConfig.module.loaders,
                {
                    test: /\.js$/,
                    exclude: [
                        path.resolve('node_modules/')
                    ],
                    loaders: [
                        'react-hot',
                        'babel?cacheDirectory=true'
                    ]
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'url',
                    query: {
                        limit: 10000,
                        name: 'images/[name]-[hash].[ext]'
                    }
                },
                {
                    test: /\.css$/,
                    loaders: [
                        'style',
                        'css?-minimize',
                        'postcss'
                    ]
                },
                {
                    test: /\.less$/,
                    loaders: [
                        'style',
                        'css?-minimize',
                        'postcss',
                        'less'
                    ]
                }
            ]
        },
        plugins: [
            ...webpackCommonConfig.plugins,
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            new HtmlWebpackPlugin({ template: 'src/assets/index.html' })
        ]
    };
}
