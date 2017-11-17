const path              = require('path');
const UglifyJsPlugin    = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./webpack.config.base').config;
const cssLoaders = require('./webpack.config.base').cssLoaders;

const config = merge(baseConfig, {
    watch: true,
    // the devtool enable us to see the original file when we debug a line and not the bundle.js
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [...cssLoaders, 'less-loader']
                })
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = config;
