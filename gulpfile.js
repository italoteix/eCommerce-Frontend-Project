"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task("concatScripts", function() {
    gulp.src([
        'js/flickr.js',
        'js/searchbox.js',
        'js/blog.js',
        'js/twitter.js',
        'js/dropdown.js',
        'js/grid-list.js',
        'js/bar.js'])
    .pipe(concat("index.js"))
    .pipe(gulp.dest("js"));
});