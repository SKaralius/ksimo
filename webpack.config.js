const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CnameWebpackPlugin = require("cname-webpack-plugin");

module.exports = {
  mode: "none",
  optimization: {
    minimize: true,
    // Minimizes javascript
    minimizer: [new TerserPlugin()],
  },
  // Additional modules
  module: {
    rules: [
      // File loader rule for fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/fonts/",
            },
          },
        ],
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "postcss-loader",
          "sass-loader",
        ],
      },
      // File loader rule for images
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/img/",
            },
          },
        ],
      },
      // File loader rule for videos
      {
        test: /\.(webm|mp4)$/,
        use: "file-loader?name=videos/[name].[ext]",
      },
      // Allows transpiling javascript. Enables ES6
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // Loads HTML and minimizes it.
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
    ],
  },

  plugins: [
    // Allows for a CNAME file for Github reploy
    new CnameWebpackPlugin({
      domain: "ksimo.com",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      favicon: "src/assets/images/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
