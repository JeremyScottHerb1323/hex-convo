// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    // ============= // CREATE TASKS ========== //

    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here

    // compile less stylesheets to css -----------------------------------------
    less: {
      build: {
        files: {
          'src/css/main.css': 'src/less/*.less'
        }
      }
    },
    // configure cssmin to minify css files ------------------------------------
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'src/css/main.min.css': 'src/css/main.css'
        }
      }
    },

    watch: {
      // for stylesheets, watch css and less files
      // only run less and cssmin

      stylesheets: {
        files: ['src/css/main.css', 'src/less/*.less'],
        tasks: ['less', 'cssmin']
      }
    }
  });

  grunt.registerTask('default', ['less', 'cssmin']);

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');


};
