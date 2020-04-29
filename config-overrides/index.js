const overrideWebpackDev = require('./overrideWebpackDev');

module.exports = {
    webpack: (config, env) => overrideWebpackDev(config, env),
};
