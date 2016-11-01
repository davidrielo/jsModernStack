/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

// ES6 module thanks to babel
// You might be wondering how come we're using some ES6 code in this Gulp file,
// since it doesn't get transpiled into ES5 by Babel.
// This is because we're using a version of Node that supports ES6 features out
// of the box (make sure you are running Node > 6.5.0 by running node -v).
import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import { exec } from 'child_process';
import eslint from 'gulp-eslint';

const paths = {
  allSrcJs: 'src/**/*.js',
  gulpFile: 'gulpfile.babel.js',
  libDir: 'lib',
};

gulp.task('lint', () =>
  gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

// recommended way to delete files with gulphttps://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
gulp.task('clean', () => del(paths.libDir));

gulp.task('build', ['lint', 'clean'], () =>
    gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir))
);

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
