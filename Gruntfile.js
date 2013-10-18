'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

   mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          recursive: false
        },
        src: ['test/init.js']
      }
    },

    watch: {
      files: ['index.js', 'Gruntfile.js', '**/*.js', '!node_modules/**/*'],
      tasks: ['default']
    },
  })

  grunt.loadNpmTasks('grunt-mocha-test')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['mochaTest'])
}
