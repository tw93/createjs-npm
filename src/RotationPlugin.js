require(
    'imports-loader?this=>window!' +
    './plugins/RotationPlugin'
);

module.exports = require(
    'imports-loader?this=>window!' +
    'exports-loader?window.createjs!'
);
