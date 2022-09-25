const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
/**
 * @description 体积分析
 */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
    target: 'web',
    // devtool: 'source-map',
    // mode: 'development',
    mode: 'production',
    plugins: [
        // 体积分析
        new BundleAnalyzerPlugin(),
    ],
    optimization: {
        usedExports: true,
    },
});
