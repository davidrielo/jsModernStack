// commonjs
/*const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const exec = require('child_process').exec;
*/

// ES6 module thanks to babel
import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import { exec } from 'child_process';

const paths = {
  allSrcJs: 'src/**/*.js',
  libDir: 'lib',
};

// recommended way to delete files with gulphttps://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
gulp.task('clean', () => {
  return del(paths.libDir);
});

gulp.task('build', ['clean'], () => {
  return gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir));
});

// like running node lib
gulp.task('main', ['build'], (callback) => {
  exec(`node ${paths.libDir}`, (error, stdout) => {
    console.log(stdout);
    return callback(error);
  });
});

// runs the main task when filesystem changes happen in the specified files
gulp.task('watch', () => {
  gulp.watch(paths.allSrcJs, ['main']);
});

gulp.task('default', ['watch', 'main']);

  
 // You might be wondering how come we're using some ES6 code in this Gulp file, since it doesn't get transpiled into ES5 by Babel. 
// This is because we're using a version of Node that supports ES6 features out of the box (make sure you are running Node > 6.5.0 by running node -v).
  