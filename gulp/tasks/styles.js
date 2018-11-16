module.exports = function () {
    $.gulp.task('scss:build', () => {
        return $.gulp.src($.path.src.scss)
            .pipe($.gp.sass({
                includePaths: [$.path.src.scss],
                outputStyle: 'expanded'
            }).on('error', $.gp.sass.logError))
            .pipe($.gp.autoprefixer({
                browsers: ['last 4 version']
            }))
            // .pipe($.gp.csscomb())
            // .pipe($.gp.csso({
            //     restructure: false,
            //     sourceMap: true
            // }))
            .pipe($.gulp.dest($.path.build.css))
    });
    $.gulp.task('scss:dev', () => {
        return $.gulp.src($.path.src.scss)
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({
                includePaths: [$.path.src.scss],
                outputStyle: 'expanded'
            }).on('error', $.gp.sass.logError))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.autoprefixer({
                browsers: ['last 4 version']
            }))
            .pipe($.gulp.dest($.path.build.css))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
