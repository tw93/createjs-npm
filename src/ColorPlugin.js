/**
 * @Author: Created by raoenhui<raoenhui@jd.com>
 * @Date: 2020-06-30 17:38:26
 * @Description: webpack中this=>window相当于(function () { ... }).call(window);https://www.webpackjs.com/loaders/imports-loader/#root;
 * @tutorial: https://www.createjs.com/docs/tweenjs/classes/ColorPlugin.html
 */ 
require(
    'imports-loader?this=>window!' +
    './plugins/ColorPlugin'
);

module.exports = require(
    'imports-loader?this=>window!' +
    'exports-loader?window.createjs!'
);