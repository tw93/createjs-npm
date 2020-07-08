/*
 * @Author: Created by raoenhui<raoenhui@jd.com>
 * @Date: 2020-06-30 17:27:51
 */ 
require(
    'imports-loader?this=>window!' +
    './plugins/SamplePlugin'
);

module.exports = require(
    'imports-loader?this=>window!' +
    'exports-loader?window.createjs!'
);