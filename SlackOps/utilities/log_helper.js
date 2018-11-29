'use strict';

const LogHelper = class LogHelper {
  static log(message) {
      console.log(message);
  }

  static warn(message) {
      console.warn(message);
  }

  static error(message) {
      console.error(message);
  }
};

module.exports = LogHelper;
