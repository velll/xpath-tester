const { merge } = require('webpack-merge');
const common = require('./webpack.default.js');


module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist',
   },
 });