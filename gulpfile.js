// --------------------
// 不要修改以下内容
// =================
var gulp = require('gulp');
var runSequence = require('run-sequence');

var fs = require('fs');
var path = require('path');
var url = require('url');
var exec = require('child_process').exec;
var _ = require('lodash');
var async = require('async');
var del = require('del');
var vinylPaths = require('vinyl-paths');//delete files in the stream
//var autoprefixer = require('gulp-autoprefixer');
var savefile = require('gulp-savefile'),
    webpack = require('webpack'),
    replace = require('gulp-replace'),
    newer = require('gulp-newer');
// =================
// configs
// =================
var configs = {
    cdn: '//sslstatic.xiaoyusan.com/',
    // path 相关
    src: './src/',
    dist: './dist/',
    deploy: './public/',
    // webpack
    webpack: {},
    // 图片格式
    imgType: '*.{jpg,jpeg,png,bmp,gif,ttf,ico,htc,mp3}',
};
//如果没有配置，自动获取目录名称作为项目名称
if( !configs.name ){
    configs.name = __dirname.match(/[\\|\/]\w+$/)[0].replace(/[\\+|\/+]/g,'');
}
configs.dist = './'+configs.name + '/';
// dev watch mode
var isWatching = false;
var isWebpackInit = false;
var xysDev = false;
var argv = require('minimist')(process.argv.slice(2));
if( argv['_'][0] == 'ddev'){
    xysDev = 'dev';
    isWatching = true;
}
else if(argv['_'][0] == 'ddist'){
    xysDev = 'dist';
}

// overwrite configs
var projectConfig = {};
projectConfig.webpack = projectConfig.webpack || {};
var isWebpackEntry = projectConfig.webpack.entry ? true : false;
_.extend(configs, {}, projectConfig);


// global vars
var src = configs.src,
    dist = configs.dist;
if( xysDev == 'dev' || xysDev == 'dist' ){
    configs.cdnRoot = '{$CDN}/' + configs.name + '/';
}

console.log('start to build project [' + configs.name + ']...');

// remove old or tmp files
gulp.task('clean', function (cb) {
    del([dist], cb);
});

// clean node_modules, fix windows file name to long bug..
gulp.task('cleanmod', function (cb) {
    del('./node_modules', cb);
});

// clean all temp files
gulp.task('cleanall', function (cb) {
    del([dist,'./.sass-cache'], cb);
});

// packer js using webpack
var html2webpack  = src + '**/*.html';
var js2webpack    = src + 'js/**/*.js';
var css2webpack   = src + 'css/**/*.css';
var vue2webpack   = [src + 'component/**/*.vue',src + 'store/**/*.js',src + 'route/**/*.js'];

//var tpl2webpack   = src + 'tpl/**/*.*';
gulp.task('webpack', function (cb) {
    webpack(require('./webpack.config.js'), function(err, stats) {
        process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
			chunks: false,
			chunkModules: false
		}) + '\n\n');
        cb();
    });
});
gulp.task('webpack4prod', function (cb) {
    webpack(require('./webpack.production.config.js'), function(err, stats) {
        process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
			chunks: false,
			chunkModules: false
		}) + '\n\n')
        cb();
    });
});
// minify css and generate reversion files
// stand alone cmd to make sure all css minified
gulp.task('noop', function (cb) {
    cb();
});
gulp.task('watch', function (cb) {
    gulp.watch(html2webpack, ['webpack']);
	gulp.watch(js2webpack, ['webpack']);
    gulp.watch(vue2webpack, ['webpack']);
    gulp.watch(css2webpack, ['webpack']);  
});
// gulp.task('config.rb:set', function () {
//     gulp.src('./config.rb')
//         .pipe(replace(/dist_root\s\=\s.+\n/, function(match){
//             return 'dist_root = "'+configs.name+'/"\n';
//         }))
//         .pipe(gulp.dest('./'));
// });
gulp.task('default', ['ddev']);
//适应xiaoyusan的部署方式
gulp.task('ddev',function (cb) {
    runSequence('clean', 'webpack', 'watch', cb);
});
gulp.task('ddist', function (cb) {
    runSequence('clean', 'webpack4prod',cb);
});
gulp.task('analyze',function (cb) {
    runSequence('clean', 'webpack', cb);
});