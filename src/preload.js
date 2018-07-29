/**
 * Created by 侑夕<tw102972@alibaba-inc.com> on 2018-06-30.
 * 单独导出 preloadjs
 */

require(
    'imports-loader?this=>window!' +
    '../node_modules/preloadjs/lib/preloadjs'
);

module.exports = require(
    'imports-loader?this=>window!' +
    'exports-loader?window.createjs!'
);


