module.exports = function () {
    $.gulp.task('img:dev', () => {
        return $.gulp.src($.path.src.img)
            .pipe($.gulp.dest($.path.build.img));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src($.path.src.img)
        //.pipe($.gp.tinypng(YOUR_API_KEY))
            .pipe($.gulp.dest($.path.build.img));
    });


    // $.gulp.task('svg:copy', () => {
    //     return $.gulp.src('./dev/template/img/general/*.svg')
    //         .pipe($.gulp.dest('./build/template/img/general/'));
    // });
};
