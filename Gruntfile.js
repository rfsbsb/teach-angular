module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      js: {
        src: 'app/app.js',
        dest: 'app/dest/app.js'
      }
    },
    watch: {
      files: ["app/app.js", "app/controllers/*.js", "app/directives/*.js", "app/lib/*.js", "app/services/*.js"],
      tasks: ['browserify', 'uglify']
    },
    uglify: {
      build: {
        files: {
          'app/dest/app.js': ['app/dest/app.js']
        }
      }
    }
  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // The default tasks to run when you type: grunt
  grunt.registerTask('default', ['browserify','uglify']);
};