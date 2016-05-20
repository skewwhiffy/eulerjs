var gulp = require("gulp");
var mocha = require("gulp-mocha");
var util = require("gulp-util");
var nodemon = require("gulp-nodemon");

gulp.task("run", function () {
    return gulp.src(['problems/**/*.js', '**/*Tests.js'], { read: false })
        .pipe(mocha({ reporter: 'spec' }))
        .on('error', util.log);
});

gulp.task("watch-run", function () {
    gulp.watch(['**/*.js'], ['run']);
});
