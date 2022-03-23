  //# Webpack.config.js
   
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const { webpack } = require('webpack');

    module.exports = {
    // the output bundle won't be optimized for production but suitable for development
    mode: 'development',
    // the app entry point is /src/index.js
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        // the output of the webpack build will be in /public directory
        path: path.resolve(__dirname, 'public'),
        // the filename of the JS bundle will be bundle.js
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                // for any file with a suffix of js or jsx
                test: /\.jsx?$/,
                // ignore transpiling JavaScript from node_modules as it should be that state
                exclude: /node_modules/,
                // use the babel-loader for transpiling JavaScript to a suitable format
                loader: 'babel-loader',
                options: {
                // attach the presets to the loader (most projects use .babelrc file instead)
                presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
            },
            // LOADS IMAGES
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                type: 'asset/resource'

            },
            // LOADS ANY TYPE OF FILE including fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
                
        ]
    },
    devServer: {
        historyApiFallback: true,
        // contentBase: './',
        hot: true
    },
    // add a custom index.html as the template
    plugins:
            [
                new HtmlWebpackPlugin({
                    template: path.resolve(__dirname, 'src', 'index.html'),
                    filename: 'index.html'
                })
            ]
    };
