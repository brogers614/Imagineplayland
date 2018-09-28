var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './css/**/*.scss';
var output = './public/css';

gulp.task('sass', function () {
    return gulp
      // Find all `.scss` files from the `stylesheets/` folder
      .src(input)
      // Run Sass on those files
      .pipe(sass())
      // Write the resulting CSS in the output folder
      .pipe(gulp.dest(output));
  });
  gulp.task('default', ['sass' /*,, 'watch' possible other tasks... */]);