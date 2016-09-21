
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var jshint = require('gulp-jshint');
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');




var CSS_LIB = [
    'bower_components/bootstrap/dist/css/bootstrap.css',
    'bower_components/bootstrap-additions/dist/bootstrap-additions.css',
    'bower_components/angular-loading-bar/build/loading-bar.css',
    'bower_components/angular-ui-select/dist/select.css',
    'bower_components/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css',
    'bower_components/angular-xeditable/dist/css/xeditable.css'
];


var CSS_APP = [
    'css/main.css'
];


var JS_LIB = [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/bootstrap-switch/dist/js/bootstrap-switch.min.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-smart-table/dist/smart-table.js',
    'bower_components/angular-translate/angular-translate.min.js',
    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
    'bower_components/angular-resource/angular-resource.min.js',
    'bower_components/angular-toastr/dist/angular-toastr.js',
    'bower_components/angular-toastr/dist/angular-toastr.tpls.js',
    'bower_components/angular-strap/dist/angular-strap.min.js',
    'bower_components/angular-strap/dist/angular-strap.tpl.min.js',
    'bower_components/angular-loading-bar/build/loading-bar.js',
    'bower_components/angular-ui-select/dist/select.js',
    'bower_components/angular-bootstrap-switch/dist/angular-bootstrap-switch.min.js',
    'bower_components/angular-xeditable/dist/js/xeditable.js',
    'bower_components/ng-backstretch/dist/ng-backstretch.min.js',
    'bower_components/angular-cookies/angular-cookies.min.js'
];



var JS_APP = [
    'app/**/*.js'
];

/**
*   The location of the resources for deploy
*/
var DESTINATION = 'dest/';
/**
* The single page initial html file. It will be altered
* by this script.
*/
var INDEX_FILE = 'index.html';
/**
* The name of the angular module
*/

var  MODULE_NAME = 'wp-angular-starter';

/**
* Task for concatenation of the js libraries used
* in this project
*/
gulp.task('concat_js_lib', function () {
    return gulp.src(JS_LIB) // which js files
        .pipe(concat('lib.js')) // concatenate them in lib.js
        .pipe(gulp.dest(DESTINATION)) // save lib.js in the DESTINATION folder
});

/**
* Task for concatenation of the css libraries used
* in this project
*/
gulp.task('concat_css_lib', function () {
    return gulp.src(CSS_LIB) // which css files
        .pipe(concat('lib.css')) // concat them in lib.css
        .pipe(gulp.dest(DESTINATION)) // save lib.css in the DESTINATION folder
});


/**
* Task for concatenation of the js code defined
* in this project
*/
gulp.task('concat_js_app', function () {
    return gulp.src(JS_APP)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('src.js'))
    .pipe(gulp.dest(DESTINATION)).pipe(browserSync.stream());
});

/**
* Task for concatenation of the css code defined
* in this project
*/
gulp.task('concat_css_app', function () {
    return gulp.src(CSS_APP)
        .pipe(concat('app.css'))
        .pipe(gulp.dest(DESTINATION)).pipe(browserSync.stream());
});

gulp.task('compress-images', function () {
    return gulp.src('pre-images/*')
        .pipe(imagemin({progressive: true }))
        .pipe(gulp.dest('images'))
});


/**
* Task for concatenation of the html templates defined
* in this project
*/
gulp.task('templates', function () {
    return gulp.src('views/**/**.html') // which html files
        .pipe(
            templateCache('templates.js', { // compile them as angular templates
                module: MODULE_NAME,        // from module MODULE_NAME
                root: 'app'                 // of the app
            }))
        .pipe(gulp.dest(DESTINATION)).pipe(browserSync.stream());
});

/**
* Less setup
*/
gulp.task('less', function () {
    return gulp.src('pre-less/*')
        .pipe(less())
        .pipe(gulp.dest('css/')).pipe(browserSync.stream());
});



// gulp.task('css', function() {

//     gulp.src([
// 		'src/css/style.css',
//         'src/css/second.css'
//     	])
//     .pipe(concatCss('bundle.css'))
//     .pipe(cleanCSS())
//         .pipe(gulp.dest('dist/resoure/css')).
//         pipe(browserSync.stream());
// });



// gulp.task('js', function() {
//     gulp.src('src/javascript/app.js')
//         .pipe(jshint())
//     	.pipe(jshint.reporter('default'))
//         .pipe(gulp.dest('dist/resoure/javascript'))
//         .pipe(browserSync.stream());
// });

// gulp.task('sass', function() {
//     gulp.src('src/sass/style.scss')
//         .pipe(sass({outputStyle: 'compressed'}))
//         .pipe(gulp.dest('dist/resoure/css'))
//         .pipe(browserSync.stream());
// });

gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });
});

var tasks = [
    'concat_js_lib',
    'concat_css_lib',
    'concat_js_app',
    'concat_css_app',
    'templates',
    'serve'
];

gulp.task('default', tasks, function () {
    gulp.watch('css/*.css', ['concat_css_app']);
    gulp.watch('app/*/*.js', ['concat_js_app']);
    gulp.watch('app/app.js', ['concat_js_app']);
    gulp.watch('pre-less/*.less', ['less']);
    gulp.watch('views/**/**.html', ['templates']);
    gulp.watch('./index.html').on('change', browserSync.reload);
});
