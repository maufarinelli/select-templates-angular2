module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			development: {
				options: {
					paths: ["css"]
				},
				files: {
					"public/css/styles.css": "public/css/styles.less",
					"public/app/template-menu/template-menu.css": "public/app/template-menu/template-menu.less",
					"public/app/template-area/template-area.css": "public/app/template-area/template-area.less"
				}
			},
			production: {
				options: {
					paths: ["css"],
					cleancss: true
				},
				files: {
					"public/css/styles.css": "public/css/styles.less",
					"public/app/template-menu/template-menu.css": "public/app/template-menu/template-menu.less",
					"public/app/template-area/template-area.css": "public/app/template-area/template-area.less"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['less']);
}