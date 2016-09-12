import path from 'path';
import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import autoprefixer from 'autoprefixer';

export default {
    cache: true,
    stats: {
        colors: true,
        reasons: false
    },
    entry: [ 'babel-polyfill' ],
    output: {
        pathinfo: true
    },
    resolve: {
        alias: {
            '~': path.resolve('src/')
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'rebem-layers',
                query: {
                    layers: [
                        {
                            path: path.resolve('src/components/'),
                            files: {
                                main: 'index.js',
                                styles: 'styles.less'
                            }
                        },
                        {
                            path: path.resolve('src/containers/'),
                            files: {
                                main: 'index.js'
                            },
                            importFactory: false
                        }
                    ],
                    importFactory: true,
                    consumers: [
                        path.resolve('src/')
                    ]
                }
            },
            // {
            //     test: /\.js$/,
            //     exclude: [
            //         path.resolve('node_modules/')
            //     ],
            //     loader: 'babel',
            //     query: {
            //         cacheDirectory: true
            //     }
            // }
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    postcss() {
        return [
            autoprefixer({
                browsers: [
                    'last 2 Chrome versions',
                    'last 2 Firefox versions',
                    'last 2 Edge versions'
                ]
            })
        ];
    },
    plugins: [
        new ProgressBarPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, [ /moment$/ ]),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};
