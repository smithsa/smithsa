var gulp = require('gulp'),
    csso = require('gulp-csso');
    uglify = require('gulp-uglify')
    runSequence = require('run-sequence')
    del = require('del'),
    rename = require('gulp-rename')
    gutil = require('gulp-util');

gulp.task('blog', function() {
    return gulp.src('assets/js/blog.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('assets/dist/js'))
});

gulp.task('custom', function() {
    return gulp.src('assets/js/custom.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('assets/dist/js'))
});

gulp.task('menu', function() {
    return gulp.src('assets/js/menu.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('assets/dist/js'))
});

gulp.task('prism', function () {
    return gulp.src('assets/css/prism.css')
        // Minify the file
        .pipe(csso())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('assets/dist/css'))
});

gulp.task('style', function () {
    return gulp.src('assets/css/style.css')
        .pipe(csso())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('assets/dist/css'))
});

gulp.task('clean', () => del(['assets/dist/js/blog.min.js',
'assets/dist/js/custom.min.js', 'assets/dist/css/prism.min.css', 'assets/dist/css/style.min.css']));

// Gulp task to minify all files
gulp.task('default', ['clean'], function () {
    runSequence(
        'blog',
        'custom',
        'menu',
        'prism',
        'style'
    );
})