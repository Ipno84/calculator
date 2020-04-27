const rewireStyledComponents = require('react-app-rewire-styled-components');

function overrideWebpackDev(config, env) {
    config.output.filename = 'bundle.min.js';
    config.output.chunkFilename = '[name].min.js';
    config.optimization.splitChunks = {};
    config = rewireStyledComponents(config, env, {
        displayName: true,
        fileName: true,
        pure: true,
    });
    return config;
}

module.exports = overrideWebpackDev;
