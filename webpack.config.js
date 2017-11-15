const path              = require('path');
const UglifyJsPlugin    = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const dev               = process.env.NODE_ENV === 'dev';

let cssLoaders = [
    { loader: 'css-loader', options: { importLoaders: 1, minimize: !dev } }
];

if (!dev) {
    cssLoaders.push(
        {
            loader: 'postcss-loader',
            options: {
                // the autoprefixer adds the vendor prefixes to css (ex: webkit, ms)
                plugins: (loader) => [
                    require('autoprefixer')({
                        browsers: ['last 2 versions', 'ie > 8']
                    })
                ]
            }
        }
    );
}

let config = {
    entry: {
        bundle: './public/js/index.js'
    },
    watch: dev,
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: 'bundle.js'
    },
    // the devtool enable us to see the original file when we debug a line and not the bundle.js
    devtool: dev ? 'cheap-module-eval-source-map' : false,
    module: {
        rules: [
            // the babel-loader converts new js features into old ones
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: cssLoaders
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [...cssLoaders, 'less-loader']
                })
            }
        ]
    },
    plugins: [
        // it's better to have the css in the middle of the html during development so we can use the hot loading
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: dev
        })
    ]
};

// uglify the js if in production and add source map
if (!dev) {
    config.plugins.push(new UglifyJsPlugin({
        sourceMap: false
    }));
}

module.exports = config;