/**
 * Created by Tw93<tw93@qq.com> on 2018-07-29.
 * 将createjs 弄成 cmd 标准模式，解决原有 createjs 不能通过 npm 使用问题
 */

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    "create": ['./src/create.js'],
    "easel": ['./src/easel.js'],
    "tween": ['./src/tween.js'],
    "sound": ['./src/sound.js'],
    "preload": ['./src/preload.js']
  },
  output: {
    path: path.resolve(__dirname, "lib/"),
    filename: "[name].js",
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
