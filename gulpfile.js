const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require ('sass'))
const purgecss = require('gulp-purgecss')

const path = 'sass/**/*.scss'

function buildstyles(){
    return src(path)
        .pipe(sass())
        .pipe(purgecss({content: ['*.html'] }))
        .pipe(dest('css'))
}

function watchtask(){
    watch([path, '*.html'], buildstyles)
}

exports.default = series(buildstyles, watchtask)