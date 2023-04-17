'use strict';

var loadEnTranslations = function loadEnTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./en.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'en-translations');
};

var loadEnUSTranslations = function loadEnUSTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./en-US.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'en-US-translations');
};

var translationsLoaders = {
  'en': loadEnTranslations,
  'en-US': loadEnUSTranslations
};

module.exports = translationsLoaders;