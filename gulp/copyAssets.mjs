import gulp from 'gulp';

const copy = () =>
  gulp.src([
    './source/**.html',
    './source/fonts/**',
    './source/img/**',
    './source/favicon/**',
    'source/css/*.css'
  ], {
    base: './source',
  })
    .pipe(gulp.dest('./build'));

export {copy};
