import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import productionConfig, { productionPlugins } from './production';
import webpackCommonConfig from './common';

const ROOT = path.resolve(__dirname, '../');

export default {
    ...productionConfig,
    output: {
        ...productionConfig.output,
        path: path.join(ROOT, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        ...webpackCommonConfig.plugins,
        ...productionPlugins,
        new webpack.optimize.CommonsChunkPlugin('vendor', '[name].js'),
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        })
    ],
};
