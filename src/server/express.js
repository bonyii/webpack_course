import express from 'express'
import path from 'path'

const server = express()
const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  //const staticMiddelware = express.static("dist")
  //server.use(staticMiddelware)
  const staticGzip = require("express-static-gzip")
  server.use(
    staticGzip("dist", {
      enableBrotli: true
    })
  );
} else {
  const webpack = require("webpack")
  const config = require("../../config/webpack.dev.js")
  const compiler = webpack(config)

  const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
  )

  const webpackHotMiddleware = require("webpack-hot-middleware")(compiler)

  server.use(webpackDevMiddleware)
  server.use(webpackHotMiddleware)
}

const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
  console.log("Server is listening on port: ", PORT, "environment: ", process.env.NODE_ENV)
})
