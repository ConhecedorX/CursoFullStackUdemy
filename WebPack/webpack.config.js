const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExcractPlugin = require ('mini-css-extract-plugin')
const TerserWebpack = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    // mode: 'production',
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    // webpack server tá quebrado dps aprender atualizado!!!
    // devServer: {
    //     static: ('.public'),
    //     port: 9000
    // },
    optimization: {
        minimizer: [
            new TerserWebpack({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExcractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\s?[ac]ss$/,
            use: [
                MiniCssExcractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpeg|gif)$/,
            use: ['file-loader']
        }]
    }
}