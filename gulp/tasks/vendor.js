module.exports = function () {
    $.gulp.task('libs:dev', function () {
        return $.gulp.src($.path.src.libs)
            .pipe($.gulp.dest($.path.build.libs))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
    $.gulp.task('libs:build', function () {
        return $.gulp.src($.path.src.libs)
            .pipe($.gulp.dest($.path.build.libs))
    });
};
