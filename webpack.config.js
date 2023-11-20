const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const path = require('path');

module.exports = {
  entry: {
    app: './src/assets/js/index.js',
  },
  output: {
    clean: true,
    filename: '[name].bundle.js',
    assetModuleFilename: 'assets/images/[name][ext]',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'development',
  devServer: {
    static: './src',
    compress: true,
    port: 9000,
    hot: true,
  },
  stats: {
    children: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'God Of War',
      template: 'src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'assets/images' },
        { from: 'src/assets/images/favicon/', to: 'assets/images/favicon/' },
      ],
    }),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
  ],
};
