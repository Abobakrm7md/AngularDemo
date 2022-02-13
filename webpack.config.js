const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    entry: './src/index.js',
    output: {
        //to generat new file when build
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'production',
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
          ],
        },
        plugins: [new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                filename: 'index.html',
              })],
              devServer: {
                hot: 'only',
                contentBase: path.resolve(__dirname, './dist'),
                index: 'index.html',
                port: 5200
              },
              
};