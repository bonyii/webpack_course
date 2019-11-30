const path = require("path");
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const MiniCssExtractPlutgin = require("mini-css-extract-plugin")

// main: ["@babel/polyfill", "./src/main.js"]
module.exports = (env) => {
  return {
    entry: {
      main: ["./src/main.js"]
    },
    mode: "production",
    output: {
      filename: "[name]-bundle.js",
      path: path.resolve(__dirname, "../dist"),
      publicPath: "/"
    },
    node: {
      fs: "empty"
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader'
            }
          ]
        },
        {
          test: /\.js$/,
          use: [
            {
              loader: "babel-loader"
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlutgin.loader
            },
            {
              loader: "css-loader"
            }
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            {loader: MiniCssExtractPlutgin.loader},
            {loader: "css-loader"},
            {loader: "postcss-loader"},
            {loader: "sass-loader"}
          ]
        },

        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: {
                attrs: ["img:src"]
              }
            }
          ]
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "images/[name].[ext]"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlutgin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env.NODE_ENV)
        }
      })
    ]
  }
};
