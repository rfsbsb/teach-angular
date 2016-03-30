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
      tasks: ["browserify"]
    }
  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // The default tasks to run when you type: grunt
  grunt.registerTask('default', ['browserify']);
};