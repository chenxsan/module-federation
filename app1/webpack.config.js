const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
  mode: "development",
  devServer: {
    port: 4200,
  },
  output: {
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "app1",
      library: { type: "var", name: "app1" },
      filename: "remoteEntry.js",
      exposes: {
        "./sum": "./src/sum",
      },
    }),
  ],
};
