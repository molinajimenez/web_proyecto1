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
                test: /\.css$/,
                use: ['style-loader','postcss-loader']
            },

            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)?$/,
                use: [
                    {
                        loader: 'file-loader?name=/fonts/[name].[ext]',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use:{
                    loader:'svg-url-loader',
                    options:{}
                }
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
                    'file-loader',
                    {
                      loader: 'image-webpack-loader',
                      options: {
                        
                        disable: true, // webpack@2.x and newer
                      },
                    },
                  ],
            }
        ]
    },
    plugins: [
        new HtmlWebpack({
            template: './src/index.html'
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, 'src')
      }
}