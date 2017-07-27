var path = require('path')
var chalk = require('chalk')
var gulp = require('gulp')
var gutil = require('gulp-util')
var plumber = require('gulp-plumber')
var babel = require('gulp-babel')


gulp.task('copy', () => {
	return gulp
		.src('../!(node_modules|publish)/**/*!(.js)')
		.pipe(plumber())
		.pipe(gulp.dest('../publish'))
})

gulp.task('babel', () => {
	return gulp
		.src('../!(node_modules|publish)/**/*.js')
		.pipe(babel())
		.pipe(plumber())
		.pipe(gulp.dest('../publish'))
})

gulp.task('default', ['babel', 'copy'])