var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    sass    = require('gulp-sass'),
    connect = require('gulp-connect'),
    webserver = require('gulp-webserver');

var sassSrc = 'components/sass/**/*.scss';
var htmlSrc = 'build/development/**/*.html';
var cssSrc  = 'build/development/css/*.css';
var jsSrc   = 'build/development/app/**/*.js';
var appSrc  = 'build/development';

gulp.task('connect', function(){
    connect.server({
        root : 'build/development',
        livereload : true
    });
});

gulp.task('webserver',function(){
    gulp.src('build/development')
    .pipe(webserver({
        livereload : true,
        fallback : 'index.html',
        open : true
    }));
});

gulp.task('html', function(){
    gulp.src(htmlSrc)
    .pipe(connect.reload());
});

gulp.task('sass', function(){
    return gulp.src(sassSrc)
    .pipe(sass({
        outputStyle : 'expanded'
        }).on('error',sass.logError))
    .pipe(gulp.dest('build/development/css'));
});

gulp.task('watch',function(){
    gulp.watch(htmlSrc,['html']);
    gulp.watch(sassSrc,['sass']);
});

gulp.task('default',['html','sass','webserver','watch']);