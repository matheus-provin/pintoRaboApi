const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/api/index.ts',
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/',
        filename: 'app.js',
    },
    target: 'node',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};