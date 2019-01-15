module.exports = {
    build: {
        base: './build',
        css: './build/template/css/',
        js: './build/template/js/',
        img: './build/template/images/',
        fonts: './build/template/fonts/',
        libs: './build/template/libs/'
    },
    src: {
        js: './dev/template/js/**/*.js',
        libs: './dev/libs/**/*.*',
        fonts: './dev/static/fonts/**/*.*',
        img: './dev/template/img/**/*.{png,jpg,gif}',
        pug: './dev/pug/pages/*.pug',
        scss: './dev/template/scss/**/*.scss',
        data: './data/**/*.json'
    }
};
