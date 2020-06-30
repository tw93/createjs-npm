require(
    'imports-loader?this=>window!' +
    './plugins/RelativePlugin'
);

module.exports = require(
    'imports-loader?this=>window!' +
    'exports-loader?window.createjs!'
);
