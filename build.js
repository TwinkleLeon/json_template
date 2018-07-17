'use strict'

const ora = require('ora');//控制台loading效果
const rm = require('rimraf');//The UNIX command rm -rf for node.
const path = require('path');
const chalk = require('chalk');//Terminal string styling color
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const projectName = __dirname.match(/[\\|\/]\w+$/)[0].replace(/[\\+|\/+]/g,'');
const spinner = ora('building for dev...')
spinner.start();

rm("./"+projectName, err => {
    if (err) throw err
  	webpack(webpackConfig, (err, stats) => {
		spinner.stop()
		if (err) throw err
		process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
			chunks: false,
			chunkModules: false
		}) + '\n\n')

		if (stats.hasErrors()) {
			console.log(chalk.red('Build failed with errors.\n'))
			process.exit(1)
		}

		console.log(chalk.cyan('start watch...\n'))
  	});
});
