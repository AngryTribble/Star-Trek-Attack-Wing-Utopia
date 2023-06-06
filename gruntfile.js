module.exports = function(grunt) {

	grunt.initConfig({

		watch: {
			grunt: {
				files: "Gruntfile.js",
				options: { reload: true },
			},
			js: {
				files: ["src/js/*.js", "src/js/common/*.js"],
				tasks: ["build-js"],
			},
			templates: {
				files: ["src/templates/*.html", "src/templates/common/*.html"],
				tasks: ["build-js"],
			},
			css: {
				files: ["src/css/**.css", "src/css/common/*.css"],
				tasks: ["build-css"],
			},
			index: {
				files: ["src/*.html", "src/staw-utopia/*.html"],
				tasks: ["build-index"],
			},
			data: {
				files: "src/data/*",
				tasks: ["build-data"],
			}
		},

		clean: {
			build: ["staw-utopia/*"],
			templates: ["staw-utopia/utopia-templates.js"],
		},

		ngtemplates: {
			utopia: {
				cwd: "src/templates",
				src: ["*.html", "common/*.html"],
				dest: "staw-utopia/utopia-templates.js",
				options: {
					url: function(url) {
						var i = url.lastIndexOf("/");
						if( i >= 0 && i < url.length )
							url = url.substring(i+1);
						return url;
					}
				}
			}
		},

		uglify: {
			js: {
				files: {
					"staw-utopia/js/utopia.min.js": [ "src/js/*.js", "src/js/common/*.js", "<%= ngtemplates.utopia.dest %>" ]
				},
				options: {
					sourceMap: true,
				}
			}
		},

		cssmin: {
			css: {
				files: {
					"staw-utopia/css/utopia.min.css": ["src/css/*.css", "src/css/common/*.css", "!src/css/utopia-print.css"],
				}
			}
		},

		copy: {
			misc: {
				expand: true,
				cwd: "src",
				src: [ "js/lib/*", "fonts/*", "img/**/*", "assets/**"],
				dest: "staw-utopia/",
			},
			css: {
				expand: true,
				cwd: "src",
				src: [ "css/utopia-print.css" ],
				dest: "staw-utopia/",
			},
			csslib: {
				expand: true,
				cwd: "src/css/lib",
				src: [ "*.css" ],
				dest: "staw-utopia/css/",
			},
			index: {
				expand: true,
				cwd: "src",
				src: [ "*.html", "staw-utopia/*.html" ],
				dest: "staw-utopia/",
			},
			// See https://github.com/AngryTribble/Star-Trek-Attack-Wing-Utopia/issues/46
			urlChange: {
				expand: true,
				cwd: "src",
				src: [ "staw-utopia/index.html" ],
				dest: "staw-utopia/",
			},
			powertip: {
				expand: true,
				cwd: "node_modules/jquery-powertip/dist",
				src: [ "jquery.powertip.min.js" ],
				dest: "staw-utopia/js/lib/",
			},
			powertip_css: {
				expand: true,
				cwd: "node_modules/jquery-powertip/dist/css",
				src: [ "jquery.powertip.min.css" ],
				dest: "staw-utopia/css/",
			}
		},

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('build-js', ["ngtemplates","uglify"]);
	grunt.registerTask('build-css', ["cssmin","copy:css"]);
	grunt.registerTask('build-index', ["copy:index"]);
	grunt.registerTask('build-data', function() {
		var done = this.async();
		var exec = require('child_process').exec;

		exec('npm run data', function(err, stdout, stderr) {
			if(err) {
				grunt.warn('Failed generating Utopia data.');
				grunt.log.writeln(err);
				done(false);
				return;
			}

			grunt.log.ok('Generated Utopia data');
			done();
		});
	})

	//grunt.registerTask('default', ["clean","build-js","build-css","build-index","build-data","copy","clean:templates"]);
	grunt.registerTask('default', ["build-js","build-css","build-index","build-data","copy","clean:templates"]);
};