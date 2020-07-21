const baseConfig = require('./base.config');
const { merge } = require('webpack-merge');


module.exports = merge(baseConfig,
    {
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            contentBase: '../dist',
            hot: true
        },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                }
            ]
        }
    }
);
