/**
 * Created by 侑夕<tw102972@alibaba-inc.com> on 2018-05-17.
 * 将 createjs 弄成 cmd 标准模式，解决原有 createjs 不能通过 npm 使用问题
 */

// 将模块中的this还原为window
require(
    'imports-loader?this=>window!' +
    '../node_modules/easeljs/lib/easeljs'
);
require(
    'imports-loader?this=>window!' +
    '../node_modules/tweenjs/lib/tweenjs'
);
require(
    'imports-loader?this=>window!' +
    '../node_modules/preloadjs/lib/preloadjs'
);

require(
    'imports-loader?this=>window!' +
    '../node_modules/soundjs/lib/soundjs'
);

// module.exports = window.createjs;
module.exports = require(
    'imports-loader?this=>window!' +
    'exports-loader?window.createjs!'
);


