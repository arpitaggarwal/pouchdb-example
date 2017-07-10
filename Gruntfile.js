'use strict';
var grunt = require('grunt');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    app: {
            source: 'src/main/webapp',
            dist: 'src/main/webapp'
    },
    uglify: {
            dist: {
                   options: {
                       compress: true,
                       preserveComments: false,
                       report: 'min'
                   },
                   files: {
                       '<%= app.dist %>/dist/js/script.js': [
                           'bower_components/jquery/dist/jquery.js',
                           'bower_components/angular/angular.js',
                           'bower_components/angular-ui-router/release/angular-ui-router.js',
                           'bower_components/angular-animate/angular-animate.js',
                           'bower_components/angular-aria/angular-aria.js',
                           'bower_components/angular-material/angular-material.js',
                           'bower_components/angular-messages/angular-messages.js',
                           'bower_components/bootstrap/dist/bootstrap.js',
                           'bower_components/defiant/dist/defiant.js',
						   'bower_components/ydn.db/jsc/ydn.db-dev.js'
                      ]
                   }
               }
    }
});

  // Load the plugin that provides the "uglify" task.
   grunt.loadNpmTasks('grunt-contrib-uglify');

   grunt.loadNpmTasks('grunt-install-dependencies');
   grunt.registerTask('default', ['uglify:dist']);
};
