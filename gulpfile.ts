import { src, dest, watch, series } from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

function buildStyles(){
    return src('styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('public/css'))
}

function watchTask(){
    watch(['styles/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)