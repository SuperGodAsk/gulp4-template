global.$ = {
    path: require('./gulp/paths/path.js'),
    tasks: require('./gulp/paths/tasks.js'),
    gulp: require('gulp'),
    del: require('del'),
    fs: require('fs'),
    prettify: require('gulp-html-prettify'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()
};
$.tasks.forEach(function (taskPath) {
    require(taskPath)();
});
$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel('libs:dev', 'scss:dev', 'js:dev', 'fonts', 'img:dev', 'pug')));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('libs:build', 'scss:build', 'js:build', 'fonts', 'img:build', 'pug')));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
