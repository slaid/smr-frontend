'use strict';
let fallback = require('connect-history-api-fallback');
let log = require('connect-logger');

// Export configuration options
module.exports = {
  injectChanges: false,
  filters: ['./src/**/*.{html,htm,css,js}'],
  watchOptions: {
    ignored: 'node_modules'
  },
  server: { "baseDir": "./src" },
  middleware: [
    log({ format: '%date %status %method %url' }),
    fallback({
      index: './src/index.html',
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
    })
  ],
  https: false,
};
