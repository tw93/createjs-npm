/**
 * Created by 侑夕<tw102972@alibaba-inc.com> on 2018-06-30.
 * 单独导出 easeljs
 */

require(
    'imports-loader?this=>window!' +
    '../node_modules/easeljs/lib/easeljs'
);

module.exports = require(
    'imports-loader?this=>window!' +
    'exports-loader?window.createjs!'
);


