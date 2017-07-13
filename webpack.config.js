const path  = require("path");
const webpack   = require("webpack");

let isProd  = false;

if (process.env.NODE_ENV === "prod") {
    isProd  = true;
}

module.exports  = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "public/dist/"),
        filename: "js/bundle.js",
        publicPath: "/assets/"
    },
    plugins: isProd ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ] : [],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './src/public',
        stats: 'minimal'
    }
};