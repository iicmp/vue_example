const buildConfig = require('./build/build.js');

module.exports = process.env.NODE_ENV === 'development' ? {} : buildConfig;
