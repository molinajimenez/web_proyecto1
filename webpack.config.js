const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'css-loader',

                },{
                    loader: 'postcss-loader'
                }

                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpack({
            template: './src/index.html'
        })
    ]
}