const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/js/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.[contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
    open: true,
    hot: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      title: "Webpack Starter",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
