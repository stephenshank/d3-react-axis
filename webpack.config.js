const path = require("path");

module.exports = {
  entry: path.resolve("src", "index.js"),
  mode: "production",
  externals: {
    "react": "react"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    library: "d3-react-axis",
    libraryTarget: "commonjs2",
    filename: "d3-react-axis.js"
  }
};
