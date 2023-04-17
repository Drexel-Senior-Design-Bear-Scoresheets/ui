const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const isDevelopment = process.env.NODE_ENV !== 'production';

// Import the terra-toolkit configuration.
const defaultWebpackConfig = require('@cerner/webpack-config-terra');

// Create the app-level configuration
const appWebpackConfig = () => ({
    mode: isDevelopment ? 'development' : 'production',
    entry: {
        index: path.resolve(path.join(__dirname, 'src', 'index')),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: path.join(__dirname, 'public', 'index.html'),
        }),
    ]
});

// combine the configurations using webpack-merge
const mergedConfig = (env, argv) => (
    merge(defaultWebpackConfig(env, argv), appWebpackConfig(env, argv))
);

module.exports = mergedConfig;