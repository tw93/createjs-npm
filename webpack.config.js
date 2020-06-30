/*
 * @Author: Tw93<tw93@qq.com> on 2018-07-29
 * @Modify: raoenhui<raoenhui@jd.com>
 * @Date: 2020-06-30 16:26:08
 * @Description: 将createjs 弄成 cmd 标准模式，解决原有 createjs 不能通过 npm 使用问题
 */ 

const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
var files = fs.readdirSync('src');
var entry = {};

files.forEach(function (val) {
  if (val === 'plugins') return;
  let tKey = val.split('.')[0];
  entry[tKey] = `./src/${val}`;
})
module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, "lib/"),
    filename: "[name].js",
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
