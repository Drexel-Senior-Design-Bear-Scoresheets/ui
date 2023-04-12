const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

// Import the terra-toolkit configuration.
const defaultWebpackConfig = require('@cerner/webpack-config-terra');

// Create the app-level configuration
const appWebpackConfig = () => ({
  resolve: {
    preferRelative: true
  }
});

// combine the configurations using webpack-merge
const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), appWebpackConfig(env, argv))
);

const fs = require('fs');


try {
  fs.writeFileSync('finalWebpack.json', JSON.stringify(mergedConfig));
  // file written successfully
} catch (err) {
  console.error(err);
}

module.exports = mergedConfig;