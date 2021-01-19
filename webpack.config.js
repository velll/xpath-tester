const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/bundle')
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/index.css', to: '.'},
        { from: 'src/favicon.png', to: '.'},
        { from: 'src/index.html', to: '.'}
      ],
    }),
  ],
  devtool: 'source-map',
  devServer: {
    proxy: {
      "/": { "target": "http://localhost:8081/" },
      "/api": {
          "target": "http://localhost:8081/",
          "pathRewrite": {
                  "^/api" : ""
          },
          "changeOrigin": true
      }
    }
  }

};
