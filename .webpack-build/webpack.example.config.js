const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  mode: "development",
  entry: {
    example: path.resolve(__dirname, '../example/example.ts'),
    index: path.resolve(__dirname, '../src/index.ts'),
  },
  //输出文件出口
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../example/index.html'),
      inject: 'body'
    })
  ],
  // devServer: {
  //   contentBase: path.join(__dirname, '../dist'),
  //   port: 8080,
  // },
  resolve: {
    extensions: ['.ts', '.js']
  },
};
