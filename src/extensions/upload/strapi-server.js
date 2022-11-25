'use strict';

module.exports = (plugin) => {
  plugin.services.upload = require('./server/services/upload');
  return plugin;
};