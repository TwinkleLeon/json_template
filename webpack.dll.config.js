var path = require("path");
var webpack = require("webpack");

const projectName = __dirname.match(/[\\|\/]\w+$/)[0].replace(/[\\+|\/+]/g,'');
const distDir = projectName+'/js/';

module.exports = {
    devtool:'#inline-source-map',
    // 你想要打包的模块的数组
    entry: {
        vendor: ['vue','vue/dist/vue.esm.js', 'vuex', 'vue-router', 'axios', 'raven-js','raven-js/plugins/vue','es6-promise','core-js']
    },
    output: {
        path: path.join(__dirname, distDir), // 打包后文件输出的位置
        filename: '[name].dll.js',
        library : '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            /**
             * path
             * 定义 manifest 文件生成的位置
             * [name]的部分由entry的名字替换
             */
            path: path.join(__dirname, distDir, '[name]_manifest.json'),
            /**
             * name
             * dll bundle 输出到那个全局变量上
             * 和 output.library 一样即可。
             */
            name: '[name]_library'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};