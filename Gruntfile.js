module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      // watch
      files: ['tests/*', 'index.html'],
      tasks: ['qunit']
    },
    qunit: {
        all: {
          options: {
            urls: [
              // url where tests can be reached
              // <path to tests/index.html>,
            ]
          }
        }
    },
    githooks: {
      all: {
        // Will run the jshint and test:unit tasks at every commit
        'pre-commit': 'qunit',
      }
    }
  });
  grunt.loadNpmTasks('grunt-githooks');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.registerTask('default', ['qunit']);
};
