const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                exclude: "/node_modules/",
                test: /\.js$|jsx/,
                use: {
                    loader: 'babel-loader',
                    options: { 
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        compact: false,
                        
                 }
                }
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] // Note that postcss loader must come before sass-loader
            },
            {
                test: /\.(jpe?g|png|gif)$/i, 
                loader: 'file-loader',
                options: {
                  name: '/assets/[name].[ext]'
                }
            },
            {
                test: /\.svg$/,
                use:['@svgr/webpack'],
            }
        ]
    },
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,

        watchOptions: {
            poll: true,
            ignored: "/node_modules/"
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new HtmlWebpackPlugin({
            template: "template.html",
            title: "Nestegg: Mortgage & Real Estate Consultation",
            favicon: "./src/assets/logotab.png",
        }),
    ],
    mode: "development",
}