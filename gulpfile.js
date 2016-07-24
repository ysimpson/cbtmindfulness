var
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cmq = require('gulp-group-css-media-queries'),
    csso = require('gulp-csso'),
    size = require('gulp-size');

gulp.task('sass', function () {

    var dest = './public/css';

    return gulp.src(['./src/sass/app.{scss, sass}'])
        .pipe(sass({
        }))
        .pipe(autoprefixer())
        .pipe(cmq({
            log: true
        }))
        .pipe(csso())
        .pipe(gulp.dest(dest))
        .pipe(size());
});

gulp.task('default',function() {
    gulp.watch('src/sass/**/*.scss', ['sass']);
});