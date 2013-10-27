'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    clean: {
      tests: ['tmp']
    },

    coffee_views: {
      default_options: {
        files: {
          'tmp/basic.html': 'test/fixtures/basic.coffee'
        }
      },
      custom_options: {
        options: {
          method: 'mung',
          params: {title: 'Custom options'}
        },
        files: {
          'tmp/custom_options.html': 'test/fixtures/custom_options.coffee'
        }
      }
    },

    nodeunit: {
      tests: ['test/*_test.js']
    },

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['jshint', 'clean', 'coffee_views', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);

};

