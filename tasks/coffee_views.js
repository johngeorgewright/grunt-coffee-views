'use strict';

var Base = require('coffee-views').Base,
    path = require('path');

require('coffee-script');

module.exports = function (grunt) {

  grunt.registerMultiTask('coffee_views', 'Coffee views parser', function () {
    var options = this.options({
          method: 'render',
          params: {}
        });

    this.files.forEach(function (f) {

      var srcs = f.src.filter(function (filepath) {
            if (!grunt.file.exists(filepath)) {
              grunt.log.warn('Source file "' + filepath + '" not found.');
              return false;
            } else {
              return true;
            }
          }),
          output = '',
          params, View, view;

      srcs.forEach(function (src) {
        if (typeof options.params === 'function') {
          params = options.params(src);
        } else {
          params = options.params;
        }

        View = require(path.resolve(src));
        view = new View();

        if (view instanceof Base) {
          output += view.compile(options.method, params);
        } else {
          throw new Error('View isn\'t instance of coffee-views.Base');
        }
      });

      grunt.file.write(f.dest, output);
      grunt.log.ok('File "' + f.dest + '" created.');

    });
  });

};

