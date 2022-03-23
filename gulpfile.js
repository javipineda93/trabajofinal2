const { series, src, dest, watch,parallel  } = require('gulp');
const sass = require ('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

//utilidades css
const autoprefixer = require('autoprefixer');
const postcss = require ('gulp-postcss');
const cssnano = require('cssnano');
const sourcemap = require('gulp-sourcemaps');

//utilidades js

const terser = require('gulp-terser-js');
const rename = require('gulp-rename');
//funcion que compila SASS

const paths = {
    imagenes: 'src/img/**/*',
    scss:'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

function css(){
    return src(paths.scss)
    .pipe(sourcemap.init())
    .pipe(sass() )
    .pipe(postcss([autoprefixer(), cssnano()] ))
    .pipe( sourcemap.write('.'))
    .pipe(dest('./build/css') )
}


function javascript(){
    return src(paths.js)
    .pipe(sourcemap.init())
    .pipe( concat('bundle.js'))
    .pipe(terser())
    .pipe(sourcemap.write('.'))
    .pipe(rename({suffix: '.min'}))
    .pipe( dest('./build/js'))
}

function imagenes(){
    return src(paths.imagenes)
    .pipe(imagemin () )
    .pipe( dest ( './build/img' ))
    .pipe(notify({message: 'Imagen Minificada.'}));
}

function versionWebp(){
    return src(paths.imagenes)
    .pipe(webp())
    .pipe( dest ( './build/img' ))
    .pipe(notify({message: 'Versión Webp'}));
}

function watchArchivos(){
    watch(paths.scss,css);
    watch(paths.js, javascript);    
}


exports.css = css;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series (css,javascript, imagenes, versionWebp, watchArchivos);