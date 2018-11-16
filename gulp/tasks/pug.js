module.exports = function () {
    $.gulp.task('pug', () => {
        return $.gulp.src($.path.src.pug)
            .pipe($.gp.pug({
                locals: {
                    nav: JSON.parse($.fs.readFileSync('./data/navigation.json', 'utf8')),
                },
                pretty: true
            }))
            .on('error', function (err) {
                process.stderr.write(err.message + '\n');
                this.emit('end');
            })
            .pipe($.gulp.dest($.path.build.base))
            .on('end', $.browserSync.reload);
    });
};
