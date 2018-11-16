module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch($.path.src.pug, $.gulp.series('pug'));
        $.gulp.watch($.path.src.data, $.gulp.series('pug'));
        $.gulp.watch($.path.src.scss, $.gulp.series('scss:dev'));
        //$.gulp.watch('./dev/static/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch($.path.src.js, $.gulp.series('js:dev'));
        $.gulp.watch($.path.src.vendor, $.gulp.series('vendor:dev'));
        $.gulp.watch($.path.src.img, $.gulp.series('img:dev'));
    });
};
