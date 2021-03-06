module.exports = function(grunt) {

  grunt.initConfig({
    lintspaces: {
      all: {
        src: [
          '*',
          'app/**/*',
          'config/**/*',
          'public/css/**/*',
          'public/js/**/*',
          'public/views/**/*'
        ],
        filter: 'isFile',
        options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentation: 'spaces',
          spaces: 2
        }
      },
    },

    trimtrailingspaces: {
      main: {
        src: [
          '*',
          'app/**/*',
          'config/**/*',
          'public/css/**/*',
          'public/js/**/*',
          'public/views/**/*'
        ],
        filter: 'isFile',
        options: {
          encoding: 'utf8',
          failIfTrimmed: false
        }
      }
    },

    exec: {
      tabs2spaces: 'find . \\\( -name "*.js" -o -name "*.html" -o -name "*.css" -o -name "*.jade" -o -name "*.json" \\\) ' +
                   '-not \\\( -type d -o -path "./public/lib/*" -o -path "./node_modules/*" -o -path "./.vagrant/*" -o -path "./.git/*" \\\) ' +
                   '-exec bash -c \'expand -t 2 "$0" > /tmp/e && mv /tmp/e "$0"\' {} \\\;',

      spaces2tabs: 'find . \\\( -name "*.js" -o -name "*.html" -o -name "*.css" -o -name "*.jade" -o -name "*.json" \\\) ' +
                   '-not \\\( -type d -o -path "./public/lib/*" -o -path "./node_modules/*" -o -path "./.vagrant/*" -o -path "./.git/*" \\\) ' +
                   '-exec bash -c \'unexpand -t 2 "$0" > /tmp/e && mv /tmp/e "$0"\' {} \\\;',
      npmInstall: 'npm install',
      bowerInstall: 'bower install'
    },

    sass: {
      dist: {
        files: {
          'public/css/style.css' : 'public/css/style.scss'
        }
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          args: [],
          ignore: ['node_modules/**','public/**'],
          ext: 'js,html',
          //nodeArgs: ['--debug'],
          delayTime: 1,
          cwd: __dirname
        }
      }
    },

    concurrent: {
      tasks: ['nodemon', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('check-spaces', ['lintspaces']);

  grunt.registerTask('fix-spaces', ['trimtrailingspaces', 'exec:tabs2spaces']);

  grunt.registerTask('default',['sass','concurrent']);

  grunt.registerTask('install',['exec:npmInstall','exec:bowerInstall']);

};