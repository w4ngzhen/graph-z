const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  devtool: 'inline-source-map',
  mode: "development",
  entry: {
    example: './src/example/example.ts',
    index: './src/index.ts',
  },
  //输出文件出口
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../example')
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
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
