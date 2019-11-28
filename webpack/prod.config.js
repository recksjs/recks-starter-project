const baseConfig = require('./base.config');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge.strategy({
    'module.rules': 'append'
})(baseConfig, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    mangle: true,
                    output: {
                        // output options
                        beautify: false,
                        comments: /@license/i,
                    },
                    sourceMap: false,
                    ecma: 5, // specify one of: 5, 6, 7 or 8
                    keep_classnames: undefined,
                    keep_fnames: false,
                    ie8: false,
                    module: false,
                    nameCache: null, // or specify a name cache object
                    safari10: false,
                    toplevel: false,
                    warnings: false,
                },
                extractComments: true,
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../dist'
                        },
                    },
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ]
});
