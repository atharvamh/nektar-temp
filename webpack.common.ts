import path from 'path';

module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(tsx)?$/,
                use: 'babel-loader',
                exclude: [/node_modules/],
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
}