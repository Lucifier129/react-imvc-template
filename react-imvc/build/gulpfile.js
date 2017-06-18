var config = {
	css: {
		src: ['../../src/**/*.css'],
		dest: '../../publish/dest'
	},
	html: {
		src: ['../../src/**/*.@(html|htm)'],
		dest: '../../publish/dest'
	},
	img: {
		src: ['../../src/**/*.@(jpg|jepg|png|gif|ico)'],
		dest: '../../publish/dest'
	},
	js: {
		src: ['../../src/lib/**/*.js'],
		dest: '../../publish/dest/lib'
	},
	copy: {
		src: ['../../src/**/*.!(html|htm|css|js|jpg|jepg|png|gif|ico)'],
		dest: '../../publish/dest'
	},
	publishCopy: {
		src: [
			'../../!(node_modules|publish)/**/*',
			'../../!(node_modules|publish)'
		],
		dest: '../../publish'
	},
	publishBabel: {
		src: [
			'../../!(node_modules|publish)/**/*.js',
			'../../*.js'
		],
		dest: '../../publish'
	}
}

Object.assign(config, require('../../build.config'))

var chalk = require('chalk')
var gulp = require('gulp')
var gutil = require('gulp-util')
var plumber = require('gulp-plumber')
var cleanCSS = require('gulp-clean-css')
var htmlmin = require('gulp-htmlmin')
var imagemin = require('gulp-imagemin')
var uglify = require('gulp-uglify')
var babel = require('gulp-babel')

gulp.task('minify-css', () =>
	gulp
	.src(config.css.src)
	.pipe(plumber())
	.pipe(
		cleanCSS({
				debug: true,
				compatibility: 'ie7'
			},
			(details) => {
				var percent = (details.stats.minifiedSize /
					details.stats.originalSize *
					100).toFixed(2)
				var message = `${details.name}(${chalk.green(percent)}%)`
				gutil.log('gulp-clean-css:', message)
			}
		)
	)
	.pipe(gulp.dest(config.css.dest)))

gulp.task('minify-html', () =>
	gulp
	.src(config.html.src)
	.pipe(plumber())
	.pipe(
		htmlmin({
			collapseWhitespace: true
		})
	)
	.pipe(gulp.dest(config.html.dest)))

gulp.task('minify-img', () =>
	gulp
	.src(config.img.src)
	.pipe(plumber())
	.pipe(imagemin())
	.pipe(gulp.dest(config.img.dest)))

gulp.task('minify-js', () =>
	gulp
	.src(config.js.src)
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest(config.js.dest)))

gulp.task('copy', () =>
	gulp
	.src(config.copy.src)
	.pipe(plumber())
	.pipe(gulp.dest(config.copy.dest)))

gulp.task('publish-copy', () => 
	gulp
	.src(config.publishCopy.src)
	.pipe(plumber())
	.pipe(gulp.dest(config.publishCopy.dest))
)

gulp.task('publish-babel', ['publish-copy'], () => {
	return gulp
		.src(config.publishBabel.src)
		.pipe(babel())
		.pipe(plumber())
		.pipe(gulp.dest(config.publishBabel.dest))
})

gulp.task('publish', ['publish-babel'])

gulp.task('default', ['minify-html', 'minify-css', 'minify-img', 'minify-js', 'copy', 'publish'])