module.exports = function () {
    $.gulp.task('vendor:dev', function () {
        return $.gulp.src($.path.src.vendor)
            .pipe($.gulp.dest($.path.build.vendor))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
    $.gulp.task('vendor:build', function () {
        return $.gulp.src($.path.src.vendor)
            .pipe($.gulp.dest($.path.build.vendor))
    });
};
