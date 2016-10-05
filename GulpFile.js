var gulp = require('gulp');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var minifycss=  require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

var other_style_dir = './src/sass/other/**/*+(scss|sass)';
var sass_input = './src/sass/*.+(scss|sass)';
var style_sass_input = './src/sass/style.+(scss|sass)';
var css_output = './public/assets/css';
var view_dir = './views/*';
var js_dir = './public/assets/js/*.+(js|jsx)';
var lib_output = './public/assets/libs';

var sass_options = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

// compressed, compact, expanded, nested

gulp.task('watch', function(){
    gulp.watch(sass_input, ['style_sass']);
    gulp.watch(other_style_dir, ['other_sass']);
});

gulp.task('style_sass', function(){
    return gulp
        .src(style_sass_input)
        .pipe(sourcemaps.init())
        .pipe(sass(sass_options).on('error', sass.logError))
        .pipe(autoPrefixer({
            browsers: ['not ie < 8'],
            cascade: false
        }))
        // .pipe(gulp.dest(css_output))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(css_output))
});

gulp.task('other_sass', function(){
    return gulp
        .src(other_style_dir, {base: './src/sass/other'})
        .pipe(sourcemaps.init())
        .pipe(sass(sass_options).on('error', sass.logError))
        .pipe(autoPrefixer({
            browsers: ['not ie < 8'],
            cascade: false
        }))
        // .pipe(gulp.dest(css_output))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(css_output))
});

gulp.task('sass', function(){
    return gulp
        .src(sass_input)
        .pipe(sass(sass_options).on('error', sass.logError))
        .pipe(autoPrefixer({
            browsers: ['not ie < 8'],
            cascade: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(css_output))
});
