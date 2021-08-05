const path = require("path");
const glob = require("glob");
const TerserPlugin = require("terser-webpack-plugin");

const entries = glob
    .sync(path.join(__dirname, "/resources/js/*"))
    .reduce((entries, entry) => {
        const entryName = path.parse(entry).name;
        entries[entryName] = entry;

        return entries;
    }, {});

module.exports = {
    watch: true,
    // Where files should be sent once they are bundled
    entry: entries,
    output: {
        path: path.join(__dirname, "/public/js/"),
        filename: "[name].js",
        sourceMapFilename: "build/[name].js.map",
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
      static: path.join(__dirname, 'public'),
      compress: true,
      port: 9000,
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
    optimization: {
        chunkIds: false,
        usedExports: true,
        removeAvailableModules: true,
      },
      resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
            // Not necessary unless you consume a module using `createClass`
            'create-react-class': 'preact-compat/lib/create-react-class',
            // Not necessary unless you consume a module requiring `react-dom-factories`
            'react-dom-factories': 'preact-compat/lib/react-dom-factories'
        }
    }
};
