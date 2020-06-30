require(
    'imports-loader?this=>window!' +
    './plugins/MotionGuidePlugin'
);

module.exports = require(
    'imports-loader?this=>window!' +
    'exports-loader?window.createjs!'
);
