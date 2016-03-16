"use strict"

const path = require("path")

module.exports = {
  context: __dirname + "/build/"
  ,entry: [ "./app.jsx" ]
  ,output: {
    path: "build"
    ,filename: "app.js"
    ,publicPath: "assets"
  }
  ,module: {
    loaders: [
      {
        test: /\.jsx$/
        ,include: [__dirname + "/src", __dirname + "/build"]
        ,loader: "babel"
        ,query:{
          presets: ["react", "es2015"]
        }
      }
    ]
  }
  ,resolveLoader: {
    modulesDirectories: [ path.join(__dirname, "node_modules") ]
  }
  ,resolve: {
    alias: {
      'react-layout': __dirname + "/src/index.jsx"
    }
  }
}