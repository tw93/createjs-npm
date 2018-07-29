/**
 * Created by 侑夕<tw102972@alibaba-inc.com> on 2018-06-30.
 * 单独导出 tween.js
 */

require(
    'imports-loader?this=>window!' +
    '../node_modules/tweenjs/lib/tweenjs'
);

// module.exports = window.createjs;
module.exports = require(
    'imports-loader?this=>window!' +
    'exports-loader?window.createjs!'
);


