const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = [{
        entry: path.resolve(__dirname, "./src/browser", "index.tsx"),
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                }),
            ],
        },
        output: {
            filename: "javascripts/bundle.js",
            publicPath: "/static/", // public URL of the output directory when referenced in a browser
            path: path.resolve(__dirname, "./dist/static"),
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".scss", "css"],
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        },
        module: {
            rules: [{
                    test: /\.tsx?$/,
                    include: [
                        path.resolve(__dirname, "./src/browser"),
                        path.resolve(__dirname, "./src/shared"),
                    ],
                    use: "ts-loader",
                },
                {
                    test: /\.(jpg|png|svg)$/,
                    include: path.resolve(__dirname, "./src/shared"),
                    use: {
                        loader: "url-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "images/",
                            limit: 8192, // Beyond this limit do not inline files; delegate processing to file-loader
                        },
                    },
                },
                {
                    test: /\.s[ac]ss$/i,
                    include: path.resolve(__dirname, "./src/shared"),
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                __isBrowser__: "true",
            }),
        ],
        target: "web",
    },
    {
        entry: path.resolve(__dirname, "./src/server", "index.ts"),
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                }),
            ],
        },
        output: {
            filename: "server.js",
            publicPath: "/",
        },
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
            extensions: [".ts", ".tsx", ".js", ".md"],
        },
        module: {
            rules: [{
                    test: /\.tsx?$/,
                    include: [
                        path.resolve(__dirname, "./src/server"),
                        path.resolve(__dirname, "./src/shared"),
                    ],
                    loader: "ts-loader",
                },
                {
                    test: /\.(jpg|png|svg)$/,
                    include: path.resolve(__dirname, "./src/shared"),
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            outputPath: path.join("static", "images"),
                            name: "[name].[ext]",
                            emitFile: false, // On the server we do not write the files to disk
                        },
                    },
                },
                {
                    test: /\.md$/,
                    include: path.resolve(__dirname, "./posts"),
                    use: path.resolve(__dirname, "./webpack", "mdLoader.js"),
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                __isBrowser__: "false",
            }),
        ],
        target: "node",
        ignoreWarnings: [{
            module: RegExp("node_modules/express/lib/view.js"), // Suppress warning associated with bundling Express
        }, ],
    },
];