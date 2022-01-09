export const Dotenv = require("dotenv-webpack");

module.exports = {
    entry: './app.ts',
    plugins: [new Dotenv()],
    devtool: 'source-map', 
    target: 'node',
};