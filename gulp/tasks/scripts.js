module.exports = function () {
    $.gulp.task('js:dev', function () {
        return $.gulp.src($.path.src.js)
            .pipe($.gp.concat('main.js'))
            .pipe($.gulp.dest($.path.build.js))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
    $.gulp.task('js:build', function () {
        return $.gulp.src($.path.src.js)
            .pipe($.gp.concat('main.js'))
            .pipe($.gulp.dest($.path.build.js))
    });
};
