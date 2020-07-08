require(
    'imports-loader?this=>window!' +
    './plugins/CssPlugin'
);

module.exports = require(
    'imports-loader?this=>window!' +
    'exports-loader?window.createjs!'
);
