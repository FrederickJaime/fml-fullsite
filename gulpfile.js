var gulp = require('gulp'),
$    = require('gulp-load-plugins')(),
webserver = require('gulp-webserver'),
minifyCss = require('gulp-clean-css'),
concat = require('gulp-concat'),
rename = require("gulp-rename"),
uglify = require('gulp-uglify'),
htmlmin = require('gulp-htmlmin'),
sourcemaps = require('gulp-sourcemaps');



var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe($.sass({
      includePaths: sassPaths
    }).on('error', $.sass.logError))
    .pipe(minifyCss()) 
    .pipe(concat('style.css')) 
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(rename({              
      basename : 'style',       
      extname : '.min.css'      
    }))
    .pipe(sourcemaps.write('app/css'))
    .pipe(gulp.dest('app/css'));
});

gulp.task('libsjs', function() {
  
  
  return gulp.src([
    'bower_components/jquery/dist/jquery.js',
    'bower_components/what-input/what-input.js',
    'bower_components/foundation-sites/dist/foundation.js',
    'bower_components/gsap/src/uncompressed/TweenMax.js'
    ])
    .pipe(uglify())
    .pipe(concat('libs.js'))
    .pipe(rename({              
      basename : 'libs',       
      extname : '.min.js'      
    }))
    .pipe(gulp.dest('app/js'));
});


gulp.task('htmlmin', function() {
    return gulp.src('views/*.html')
    .pipe(htmlmin({collapseWhitespace:false}))
    .pipe(gulp.dest('app'))
});


gulp.task('imageCopy', function() {
    return gulp.src('images/**/*.{jpg,gif,svg,png}')
    .pipe(gulp.dest('app/img'))
});


gulp.task('jscompress', function() {
  
  
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(rename({              
      basename : 'script',       
      extname : '.min.js'      
    }))
    .pipe(gulp.dest('app/js'));
});

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});



gulp.task('default', ['sass','jscompress','libsjs','htmlmin','imageCopy','webserver'], function() {

  gulp.watch(['scss/**/*.scss','js/*.js','views/*.html','images/**/*.{jpg,gif,svg,png}'], ['sass','jscompress','htmlmin','imageCopy']);

});
