'use strict';

const del = require('del');

module.exports = (opts, cb) => del(opts.target, cb);
