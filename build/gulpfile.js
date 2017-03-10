var config = {
	css: {
		src: ['../src/**/*.css'],
		dest: '../dest'
	},
	html: {
		src: ['../src/**/*.(html|htm)'],
		dest: '../dest'
	},
	img: {
		src: ['../src/**/*.jpg'],
		dest: '../dest'
	},
}

var gulp = require('gulp')
var plumber = require('gulp-plumber')
var cleanCSS = require('gulp-clean-css')
var htmlmin = require('gulp-htmlmin')
var imagemin = require('gulp-imagemin')
var uglify = require('gulp-uglify')

gulp.task('minify-css', function() {
	return gulp.src(config.css.src)
		.pipe(plumber())
		.pipe(cleanCSS({
			debug: true,
			compatibility: 'ie7'
		}, function(details) {
			console.log(details.name + ': ' + details.stats.originalSize)
			console.log(details.name + ': ' + details.stats.minifiedSize)
		}))
		.pipe(gulp.dest(config.css.dest))
})

gulp.task('minify-html', function() {
	return gulp.src(config.html.src)
		.pipe(plumber())
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest(config.html.dest))
})

gulp.task('minify-img', () =>
	gulp.src(config.img.src)
	.pipe(plumber())
	.pipe(imagemin())
	.pipe(gulp.dest(config.img.dest))
)

gulp.task('minify-js', () =>
	gulp.src(config.js.src)
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest(config.js.dest))
)

gulp.task('default', ['minify-html', 'minify-css', 'minify-img'])